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
  noBioAvailable: string;
  notSpecified: string;
  genericError: string;

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
    statsDashboard: {
      name: string;
      description: string;
      preview: string;
    };
    tech: {
      name: string;
      description: string;
      preview: string;
    };
    creative: {
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
    noBioAvailable: "No bio available",
    notSpecified: "Not specified",
    genericError: "An error occurred",

    templates: {
      modern: {
        name: "Modern",
        description: "A modern, professional profile with comprehensive stats",
        preview: `<h1 align="center">👋 Hi, I'm [name]</h1>

<p align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repos&query=$.public_repos&color=success&style=flat" alt="Public Repositories" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=flat" alt="Followers" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=flat" alt="Following" />
</p>

<h3 align="center">[bio]</h3>

### 🔭 About Me

{{company}}
{{location}}

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
        name: "Simple",
        description: "Clean and focused presentation of your work",
        preview: `# [name]

<p align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;">
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repos&query=$.public_repos&style=flat" alt="Repositories" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=flat" alt="Followers" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=flat" alt="Following" />
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Views&color=0e75b6&style=flat" alt="Profile Views" />
</p>

> [bio]

## Quick Overview

\`\`\`typescript
const profile = {
  {{location_typescript}}
  {{company_typescript}}
  expertise: [
    [languages]
  ]
};
\`\`\`

## Activity

- 💻 Most used languages: [languages]

---

<details>
<summary>📊 GitHub Statistics</summary>

![Stats](https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=dark)
![Languages](https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=dark)

</details>`,
      },
      detailed: {
        name: "Detailed",
        description: "Full showcase of your GitHub presence",
        preview: `<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+[name]'s+Profile!;Check+out+my+repositories;Connect+with+me+on+GitHub&font=Fira%20Code&center=true&width=380&height=50">
  
  <p align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;">
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repositories&query=$.public_repos&style=for-the-badge" alt="Repositories" />
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=for-the-badge" alt="Followers" />
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=for-the-badge" alt="Following" />
    <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=for-the-badge" alt="Profile views" />
  </p>
</div>

## 👨‍💻 About Me

[bio]

### 🌟 Quick Facts

{{company_detailed}}
{{location_detailed}}

### 💻 Technology Expertise

\`\`\`json
{
  "primary_languages": [
    [languages]
  ]
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

---`,
      },
      statsDashboard: {
        name: "Stats Dashboard",
        description:
          "Visual statistics dashboard showcasing your GitHub activity",
        preview: `<div align="center">
  <h1><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"> Hi there, I'm [name]</h1>
  <p>[bio]</p>
</div>

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[username]&theme=github_dark" />
</div>

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=[username]&count_private=true&show_icons=true&theme=tokyonight" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=[username]&layout=compact&theme=tokyonight" />
</div>

### 📊 This Week's Coding Stats

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=dark" alt="GitHub streak"/>
</div>

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=[username]&theme=juicyfresh&column=7" alt="GitHub Trophy" />
</div>

### 👨‍💻 About Me
{{location}}
{{company}}

### 💻 Technologies I Work With
\`\`\`
[languages]
\`\`\`

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Visitors&color=0e75b6&style=flat" alt="Profile Views" />
</div>`,
      },
      tech: {
        name: "Tech Showcase",
        description: "Showcase your technical skills with visual badges",
        preview: `<h1 align="center">Hi 👋, I'm [name]</h1>
<h3 align="center">[bio]</h3>

{{company}}
{{location}}

<h3 align="center">Connect with me:</h3>
<p align="center">
<a href="https://github.com/[username]" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="github" height="30" width="40" /></a>
</p>

<h3 align="center">Languages and Tools:</h3>
<p align="center"> 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
  </a>
  <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> 
  </a>
</p>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=[username]&show_icons=true&locale=en&layout=compact" alt="Top Languages" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&locale=en" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]" alt="GitHub Streak" />
</div>`,
      },
      creative: {
        name: "Creative",
        description:
          "A creative and visually striking profile with animated elements",
        preview: `<div align="center">
  
  ![Waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=[name]&fontAlign=70&fontAlignY=40&color=gradient)
  
  <h1>Welcome to my GitHub Profile! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
  
  [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=6A737D&center=true&vCenter=true&width=435&lines=[bio])](https://git.io/typing-svg)
  
  <img src="https://github-contribution-stats.vercel.app/api/?username=[username]" alt="Contribution Stats" />
</div>

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[username]&theme=dracula" />
</div>

## 🌱 About Me

{{company}}
{{location}}

---

## 🔥 My Skills

<p align="center">
  <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="70px" height="70px">
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,react,vue,nodejs,python,java,go,docker,kubernetes&perline=5" alt="Skills">
</p>

---

## 📊 GitHub Statistics

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=radical" alt="GitHub Streak" />
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=blueviolet&style=for-the-badge" alt="Profile Views" />
</p>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer"/>`,
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
    noBioAvailable: "自己紹介文がありません",
    notSpecified: "未設定",
    genericError: "エラーが発生しました",

    templates: {
      modern: {
        name: "モダン",
        description:
          "包括的な統計情報を含む、モダンでプロフェッショナルなプロフィール",
        preview: `<h1 align="center">👋 こんにちは、[name]です</h1>

<p align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repos&query=$.public_repos&color=success&style=flat" alt="Repositories" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=flat" alt="Followers" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=flat" alt="Following" />
</p>

<h3 align="center">[bio]</h3>

### 🔭 自己紹介

{{company_ja}}
{{location_ja}}

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
        name: "シンプル",
        description: "クリーンで焦点を絞った作業の紹介",
        preview: `# [name]

<p align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;">
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repos&query=$.public_repos&style=flat" alt="Repositories" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=flat" alt="Followers" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=flat" alt="Following" />
  <img src="https://komarev.com/ghpvc/?username=[username]&label=Views&color=0e75b6&style=flat" alt="Profile Views" />
</p>

> [bio]

## 簡単な概要

\`\`\`typescript
const profile = {
  {{location_typescript_ja}}
  {{company_typescript_ja}}
  得意技術: [
    [languages]
  ]
};
\`\`\`

## 活動

- 💻 よく使用する言語: [languages]

---

<details>
<summary>📊 GitHub統計</summary>

![統計](https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=dark&locale=ja)
![言語](https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=dark&locale=ja)

</details>`,
      },
      detailed: {
        name: "詳細",
        description: "GitHubプレゼンスの完全なショーケース",
        preview: `<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=[name]のプロフィールへようこそ!;リポジトリをチェックしてください;GitHubでつながりましょう&font=Fira%20Code&center=true&width=380&height=50">
  
  <p align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 4px;">
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repositories&query=$.public_repos&style=for-the-badge" alt="Repositories" />
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=for-the-badge" alt="Followers" />
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=for-the-badge" alt="Following" />
    <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=for-the-badge" alt="Profile views" />
  </p>
</div>

## 👨‍💻 自己紹介

[bio]

### 🌟 基本情報

{{company_detailed_ja}}
{{location_detailed_ja}}

### 💻 技術スペック

\`\`\`json
{
  "主要言語": [
    [languages]
  ]
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

---`,
      },
      statsDashboard: {
        name: "統計ダッシュボード",
        description: "GitHubの活動を視覚的に表示する統計ダッシュボード",
        preview: `<div align="center">
  <h1><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"> こんにちは、[name]です</h1>
  <p>[bio]</p>
</div>

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[username]&theme=github_dark" />
</div>

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=[username]&count_private=true&show_icons=true&theme=tokyonight&locale=ja" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=[username]&layout=compact&theme=tokyonight&locale=ja" />
</div>

### 📊 今週のコーディング統計

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=dark&locale=ja" alt="GitHub streak"/>
</div>

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=[username]&theme=juicyfresh&column=7&locale=ja" alt="GitHub Trophy" />
</div>

### 👨‍💻 自己紹介
{{location_ja}}
{{company_ja}}

### 💻 使用技術
\`\`\`
[languages]
\`\`\`

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=訪問者数&color=0e75b6&style=flat" alt="プロフィール表示数" />
</div>`,
      },
      tech: {
        name: "技術ショーケース",
        description: "ビジュアルバッジで技術スキルを紹介",
        preview: `<h1 align="center">こんにちは 👋 [name]です</h1>
<h3 align="center">[bio]</h3>

{{company_ja}}
{{location_ja}}

<h3 align="center">SNS:</h3>
<p align="center">
<a href="https://github.com/[username]" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="github" height="30" width="40" /></a>
</p>

<h3 align="center">言語とツール:</h3>
<p align="center"> 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
  </a>
  <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> 
  </a>
</p>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=[username]&show_icons=true&locale=ja&layout=compact" alt="使用言語" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&locale=ja" alt="GitHub統計" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&locale=ja" alt="GitHub連続貢献" />
</div>`,
      },
      creative: {
        name: "クリエイティブ",
        description:
          "アニメーション要素を含む創造的で視覚的に印象的なプロフィール",
        preview: `<div align="center">
  
  ![波](https://capsule-render.vercel.app/api?type=waving&height=200&text=[name]&fontAlign=70&fontAlignY=40&color=gradient)
  
  <h1>私のGitHubプロフィールへようこそ！ <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
  
  [![タイピングSVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=6A737D&center=true&vCenter=true&width=435&lines=[bio])](https://git.io/typing-svg)
  
  <img src="https://github-contribution-stats.vercel.app/api/?username=[username]" alt="貢献統計" />
</div>

<div align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[username]&theme=dracula" />
</div>

## 🌱 自己紹介

{{company_ja}}
{{location_ja}}

---

## 🔥 私のスキル

<p align="center">
  <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="70px" height="70px">
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,react,vue,nodejs,python,java,go,docker,kubernetes&perline=5" alt="スキル">
</p>

---

## 📊 GitHub統計

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=radical&locale=ja" alt="GitHub連続貢献" />
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=[username]&label=プロフィール表示&color=blueviolet&style=for-the-badge" alt="プロフィール表示数" />
</p>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer"/>`,
      },
    },
  },
};
