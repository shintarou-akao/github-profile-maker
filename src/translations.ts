export type Language = "en" | "ja";

export interface Translations {
  appTitle: string;
  appDescription: string;
  chooseTemplate: string;
  backToTemplates: string;
  backToUserInput: string;
  preview: string;
  markdown: string;
  copyMarkdown: string;
  downloadMd: string;
  profileTitle: string;
  templateLabel: string;
  userNotFound: string;
  failedToFetchUser: string;
  enterUsername: string;
  searchUser: string;
  loading: string;

  // テンプレート関連の翻訳
  templates: {
    modern: {
      name: string;
      description: string;
      preview: string;
    };
    minimalist: {
      name: string;
      description: string;
      preview: string;
    };
    detailed: {
      name: string;
      description: string;
      preview: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: "GitHub Profile Maker",
    appDescription: "Create your GitHub profile in seconds",
    chooseTemplate: "Choose a Template",
    backToTemplates: "Back to Templates",
    backToUserInput: "Back to User Input",
    preview: "Preview",
    markdown: "Markdown",
    copyMarkdown: "Copy Markdown",
    downloadMd: "Download .md",
    profileTitle: "'s Profile",
    templateLabel: "Template",
    userNotFound: "User not found",
    failedToFetchUser: "Failed to fetch user data",
    enterUsername: "Enter your GitHub username",
    searchUser: "Search User",
    loading: "Loading...",

    templates: {
      modern: {
        name: "Modern Professional",
        description: "A modern, professional profile with comprehensive stats",
        preview: `<h1 align="center">👋 Hi, I'm [name]</h1>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" />
</p>

<h3 align="center">[bio]</h3>

### 🔭 About Me

- 🏢 Currently working at **[company]**
- 📍 Based in **[location]**
- 📊 Maintaining **[repos]** public repositories
- 🌟 Followed by **[followers]** developers

### 💻 Tech Stack

\`\`\`
[languages]
\`\`\`

### 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=radical" alt="GitHub Stats" />
</p>

### 🤝 Connect with Me

- GitHub: https://github.com/[username]
- Location: [location]`,
      },
      minimalist: {
        name: "Minimalist Developer",
        description: "Clean and focused presentation of your work",
        preview: `# [name]

> [bio]

## Quick Overview

\`\`\`typescript
const profile = {
  location: '[location]',
  company: '[company]',
  repositories: [repos],
  followers: [followers],
  following: [following],
  expertise: [
    [languages]
  ]
};
\`\`\`

## Activity

- 📚 Maintaining [repos] open source projects
- 👥 Connected with [followers] developers
- 💻 Most used languages: [languages]

---

<details>
<summary>📊 GitHub Statistics</summary>

![Stats](https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=dark)
![Languages](https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=dark)

</details>`,
      },
      detailed: {
        name: "Comprehensive Portfolio",
        description: "Full showcase of your GitHub presence",
        preview: `<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+[name]'s+Profile!;[repos]+Public+Repositories;[followers]+GitHub+Followers&font=Fira%20Code&center=true&width=380&height=50">
</div>

## 👨‍💻 About Me

[bio]

### 🌟 Quick Facts

- 🏢 Working at **[company]**
- 📍 Located in **[location]**
- 📈 **[repos]** public repositories
- 🤝 **[followers]** followers
- 👥 Following **[following]** developers

### 💻 Technology Expertise

\`\`\`json
{
  "primary_languages": [
    [languages]
  ],
  "stats": {
    "repositories": [repos],
    "followers": [followers],
    "following": [following]
  }
}
\`\`\`

### 📊 GitHub Analytics

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=tokyonight" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=[username]&layout=compact&theme=tokyonight" />
</p>

### 🏆 GitHub Trophies

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=[username]&theme=nord&column=7" />
</p>

### 📈 Contribution Graph

![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=[username]&theme=react-dark)

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views" />
</p>`,
      },
    },
  },
  ja: {
    appTitle: "GitHub プロフィール メーカー",
    appDescription: "数秒でGitHubプロフィールを作成",
    chooseTemplate: "テンプレートを選択",
    backToTemplates: "テンプレート選択に戻る",
    backToUserInput: "ユーザー入力に戻る",
    preview: "プレビュー",
    markdown: "マークダウン",
    copyMarkdown: "マークダウンをコピー",
    downloadMd: ".md をダウンロード",
    profileTitle: "のプロフィール",
    templateLabel: "テンプレート",
    userNotFound: "ユーザーが見つかりません",
    failedToFetchUser: "ユーザーデータの取得に失敗しました",
    enterUsername: "GitHubのユーザー名を入力してください",
    searchUser: "ユーザーを検索",
    loading: "読み込み中...",

    templates: {
      modern: {
        name: "モダンプロフェッショナル",
        description:
          "包括的な統計情報を含む、モダンでプロフェッショナルなプロフィール",
        preview: `<h1 align="center">👋 こんにちは、[name]です</h1>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views" />
</p>

<h3 align="center">[bio]</h3>

### 🔭 自己紹介

- 🏢 現在 **[company]** で働いています
- 📍 **[location]** を拠点としています
- 📊 **[repos]** 個のパブリックリポジトリを管理しています
- 🌟 **[followers]** 人のデベロッパーにフォローされています

### 💻 技術スタック

\`\`\`
[languages]
\`\`\`

### 📈 GitHub統計

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=radical&locale=ja" alt="GitHub統計" />
</p>

### 🤝 コンタクト

- GitHub: https://github.com/[username]
- 所在地: [location]`,
      },
      minimalist: {
        name: "ミニマリストデベロッパー",
        description: "クリーンで焦点を絞った作業の紹介",
        preview: `# [name]

> [bio]

## 簡単な概要

\`\`\`typescript
const profile = {
  拠点: '[location]',
  所属: '[company]',
  リポジトリ数: [repos],
  フォロワー数: [followers],
  フォロー数: [following],
  得意技術: [
    [languages]
  ]
};
\`\`\`

## 活動

- 📚 [repos]個のオープンソースプロジェクトを管理中
- 👥 [followers]人のデベロッパーとつながっています
- 💻 よく使用する言語: [languages]

---

<details>
<summary>📊 GitHub統計</summary>

![統計](https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=dark&locale=ja)
![言語](https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=dark&locale=ja)

</details>`,
      },
      detailed: {
        name: "総合ポートフォリオ",
        description: "GitHubプレゼンスの完全なショーケース",
        preview: `<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=[name]のプロフィールへようこそ!;[repos]個のパブリックリポジトリ;[followers]人のGitHubフォロワー&font=Fira%20Code&center=true&width=380&height=50">
</div>

## 👨‍💻 自己紹介

[bio]

### 🌟 基本情報

- 🏢 **[company]**で働いています
- 📍 **[location]**に住んでいます
- 📈 **[repos]**個のパブリックリポジトリ
- 🤝 **[followers]**人のフォロワー
- 👥 **[following]**人をフォロー中

### 💻 技術スペック

\`\`\`json
{
  "主要言語": [
    [languages]
  ],
  "統計情報": {
    "リポジトリ数": [repos],
    "フォロワー数": [followers],
    "フォロー数": [following]
  }
}
\`\`\`

### 📊 GitHub分析

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=tokyonight&locale=ja" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=[username]&layout=compact&theme=tokyonight&locale=ja" />
</p>

### 🏆 GitHubトロフィー

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=[username]&theme=nord&column=7&locale=ja" />
</p>

### 📈 コントリビューショングラフ

![GitHub活動グラフ](https://github-readme-activity-graph.vercel.app/graph?username=[username]&theme=react-dark&locale=ja)

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views" />
</p>`,
      },
    },
  },
};
