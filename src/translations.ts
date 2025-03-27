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
  copiedToClipboard: string;
  templateNotFound: string;
  rateLimitExceeded: string;

  // テンプレート関連の翻訳
  templates: {
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
    appDescription: "Create a GitHub profile in seconds",
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
    copiedToClipboard: "Copied to clipboard!",
    templateNotFound: "Template not found",
    rateLimitExceeded:
      "GitHub API rate limit exceeded. Please try again later.",

    templates: {
      minimalist: {
        name: "Minimalist",
        description: "A clean, focused showcase of your work",
        preview: `# [name]

## About Me

[bio]

{{company_typescript}}
{{location_typescript}}

## Skills & Technologies

\`\`\`typescript
const profile = {
  languages: [
    [languages]
  ],
  frameworks: ["React", "Vue", "Angular", "Express"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "VS Code", "Figma"]
};
\`\`\`

## Featured Projects

- **Project 1**: Short description of a cool project you worked on
- **Project 2**: Another interesting project worth mentioning
- **Project 3**: Something else you're proud of

## Connect With Me

- 📫 Email: your.email@example.com
- 🔗 LinkedIn: linkedin.com/in/[username]
- 🐦 Twitter: @[username]
- 💻 Personal Website: [username].dev
`,
      },
      detailed: {
        name: "Detailed",
        description: "A complete showcase of your GitHub presence",
        preview: `<div>
  <img src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+[name]'s+profile!;Check+out+my+repositories;Let's+connect+on+GitHub!&font=Fira%20Code&center=true&width=380&height=50">
  
  <p style="display: flex; flex-wrap: wrap; gap: 4px;">
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Repositories&query=$.public_repos&style=for-the-badge" alt="Repositories" />
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Followers&query=$.followers&color=orange&style=for-the-badge" alt="Followers" />
    <img src="https://img.shields.io/badge/dynamic/json?url=https://api.github.com/users/[username]&label=Following&query=$.following&color=blue&style=for-the-badge" alt="Following" />
    <img src="https://komarev.com/ghpvc/?username=[username]&label=Profile%20views&color=0e75b6&style=for-the-badge" alt="Profile views" />
  </p>
</div>

## 👨‍💻 About Me

[bio]

### 🌟 Basic Info

{{company_detailed}}
{{location_detailed}}

### 💻 Tech Specs

\`\`\`json
{
  "Languages": [
    [languages]
  ]
}
\`\`\`

### 📊 GitHub Analysis

<p>
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=tokyonight" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=[username]&layout=compact&theme=tokyonight" />
</p>

### 🏆 GitHub Trophies

<p>
  <img src="https://github-profile-trophy.vercel.app/?username=[username]&theme=nord&column=7" />
</p>

### 📈 Contribution Graph

![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=[username]&theme=react-dark)

---`,
      },
      creative: {
        name: "Creative",
        description:
          "A creative, visually striking profile with animated elements",
        preview: `<div>
  
  ![Header](https://capsule-render.vercel.app/api?type=waving&height=200&text=[name]&fontAlign=70&fontAlignY=40&color=gradient)
  
  <h1 style="display: flex; align-items: center; gap: 10px;">Welcome to my GitHub Profile! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
  
  <img src="https://github-contribution-stats.vercel.app/api/?username=[username]" alt="Contribution Stats" />
</div>

<div>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[username]&theme=dracula" />
</div>

## 🌱 About Me

[bio]

{{company}}
{{location}}

---

## 🔥 My Skills

<p>
  <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="70px" height="70px">
</p>

<p>
  <img src="https://skillicons.dev/icons?i=js,ts,react,vue,nodejs,python,java,go,docker,kubernetes&perline=5" alt="Skills">
</p>

---

## 📊 GitHub Stats

<p>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=radical" alt="GitHub Streak" />
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
    copiedToClipboard: "クリップボードにコピーしました！",
    templateNotFound: "テンプレートが見つかりません",
    rateLimitExceeded:
      "GitHub APIのリクエスト上限に達しました。しばらく時間をおいて再度お試しください。",

    templates: {
      minimalist: {
        name: "シンプル",
        description: "クリーンで焦点を絞った作業の紹介",
        preview: `# [name]

## 自己紹介

[bio]

{{company_typescript_ja}}
{{location_typescript_ja}}

## スキルと技術

\`\`\`typescript
const profile = {
  言語: [
    [languages]
  ],
  フレームワーク: ["React", "Vue", "Angular", "Express"],
  データベース: ["MongoDB", "PostgreSQL", "MySQL"],
  ツール: ["Git", "Docker", "VS Code", "Figma"]
};
\`\`\`

## 注目のプロジェクト

- **プロジェクト1**: 手がけたクールなプロジェクトの簡単な説明
- **プロジェクト2**: 他にも言及する価値のある興味深いプロジェクト
- **プロジェクト3**: あなたが誇りに思うその他のもの

## 連絡先

- 📫 メール: your.email@example.com
- 🔗 LinkedIn: linkedin.com/in/[username]
- 🐦 Twitter: @[username]
- 💻 個人サイト: [username].dev
`,
      },
      detailed: {
        name: "詳細",
        description: "GitHubプレゼンスの完全なショーケース",
        preview: `<div>
  <img src="https://readme-typing-svg.herokuapp.com/?lines=[name]のプロフィールへようこそ!;リポジトリをチェックしてください;GitHubでつながりましょう&font=Fira%20Code&center=true&width=380&height=50">
  
  <p style="display: flex; flex-wrap: wrap; gap: 4px;">
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

<p>
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=[username]&show_icons=true&theme=tokyonight&locale=ja" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=[username]&layout=compact&theme=tokyonight&locale=ja" />
</p>

### 🏆 GitHubトロフィー

<p>
  <img src="https://github-profile-trophy.vercel.app/?username=[username]&theme=nord&column=7&locale=ja" />
</p>

### 📈 コントリビューショングラフ

![GitHub活動グラフ](https://github-readme-activity-graph.vercel.app/graph?username=[username]&theme=react-dark&locale=ja)

---`,
      },
      creative: {
        name: "クリエイティブ",
        description:
          "アニメーション要素を含む創造的で視覚的に印象的なプロフィール",
        preview: `<div>
  
  ![波](https://capsule-render.vercel.app/api?type=waving&height=200&text=[name]&fontAlign=70&fontAlignY=40&color=gradient)
  
  <h1 style="display: flex; align-items: center; gap: 10px;">私のGitHubプロフィールへようこそ！ <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h1>
  
  <img src="https://github-contribution-stats.vercel.app/api/?username=[username]" alt="貢献統計" />
</div>

<div>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=[username]&theme=dracula" />
</div>

## 🌱 自己紹介

[bio]

{{company_ja}}
{{location_ja}}

---

## 🔥 私のスキル

<p>
  <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="70px" height="70px">
</p>

<p>
  <img src="https://skillicons.dev/icons?i=js,ts,react,vue,nodejs,python,java,go,docker,kubernetes&perline=5" alt="スキル">
</p>

---

## 📊 GitHub統計

<p>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=[username]&theme=radical&locale=ja" alt="GitHub連続貢献" />
</p>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=footer"/>`,
      },
    },
  },
};
