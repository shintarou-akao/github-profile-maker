export interface GitHubUser {
  name: string;
  bio: string;
  company: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  languages: string[];
  username: string; // Added for GitHub stats widgets
}

export interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
}

export interface GitHubApiUser {
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  language: string | null;
}

export type TemplateType = "minimalist" | "detailed" | "creative";
