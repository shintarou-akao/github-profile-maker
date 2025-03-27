import { GitHubUser, GitHubApiUser, GitHubRepo } from "../types";

// レート制限エラーメッセージ
const RATE_LIMIT_ERROR = "rate_limit_exceeded";

// GitHubからユーザー情報を取得
export async function fetchGitHubUser(
  username: string,
  notFoundMessage: string,
  failedMessage: string,
  noBioMessage: string,
  notSpecifiedMessage: string
): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);

  // レート制限かどうかチェック
  if (
    response.status === 403 &&
    parseInt(response.headers.get("x-ratelimit-remaining") || "1") === 0
  ) {
    throw new Error(RATE_LIMIT_ERROR);
  }

  if (!response.ok) {
    throw new Error(response.status === 404 ? notFoundMessage : failedMessage);
  }

  const userData: GitHubApiUser = await response.json();
  const languages = await fetchUserLanguages(username);

  return {
    name: userData.name || username,
    bio: userData.bio || noBioMessage,
    company: userData.company || notSpecifiedMessage,
    location: userData.location || notSpecifiedMessage,
    public_repos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
    languages,
    username,
  };
}

// ユーザーが使用している言語を取得
export async function fetchUserLanguages(username: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    // レート制限かどうかチェック
    if (
      response.status === 403 &&
      parseInt(response.headers.get("x-ratelimit-remaining") || "1") === 0
    ) {
      console.error("Rate limit exceeded for language fetch");
      return [];
    }

    if (!response.ok) throw new Error("Failed to fetch repositories");

    const repos: GitHubRepo[] = await response.json();
    const languages = repos
      .map((repo) => repo.language)
      .filter((lang): lang is string => lang !== null)
      .reduce((acc: { [key: string]: number }, lang) => {
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
      }, {});

    return Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang]) => lang);
  } catch (error) {
    console.error("Error fetching languages:", error);
    return [];
  }
}
