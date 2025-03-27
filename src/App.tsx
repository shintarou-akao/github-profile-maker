import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import { UserInput } from "./components/UserInput";
import { TemplateSelector } from "./components/TemplateSelector";
import { ProfilePreview } from "./components/ProfilePreview";
import { GitHubUser, Template, GitHubApiUser, GitHubRepo } from "./types";
import { Github, Languages } from "lucide-react";
import { Language, translations } from "./translations";

// ホームページコンポーネント - ユーザー名入力画面
function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [language] = useState<Language>("en");
  const t = translations[language];

  const handleUsernameSubmit = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(
          response.status === 404 ? t.userNotFound : t.failedToFetchUser
        );
      }

      // ユーザーが存在すれば、テンプレート選択画面に遷移
      navigate(`/user/${username}`);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-12">
      <UserInput
        onSubmit={handleUsernameSubmit}
        isLoading={isLoading}
        error={error}
        translations={{
          enterUsername: t.enterUsername,
          searchUser: t.searchUser,
          loading: t.loading,
        }}
      />
    </div>
  );
}

// テンプレート選択画面コンポーネント
function TemplateSelectionPage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language] = useState<Language>("en");
  const t = translations[language];

  const templates: Template[] = [
    {
      id: "modern",
      name: t.templates.modern.name,
      description: t.templates.modern.description,
      preview: t.templates.modern.preview,
    },
    {
      id: "minimalist",
      name: t.templates.minimalist.name,
      description: t.templates.minimalist.description,
      preview: t.templates.minimalist.preview,
    },
    {
      id: "detailed",
      name: t.templates.detailed.name,
      description: t.templates.detailed.description,
      preview: t.templates.detailed.preview,
    },
  ];

  // ユーザーデータをフェッチ
  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error(
            response.status === 404 ? t.userNotFound : t.failedToFetchUser
          );
        }

        const userData: GitHubApiUser = await response.json();
        const languages = await fetchUserLanguages(username);

        const user: GitHubUser = {
          name: userData.name || username,
          bio: userData.bio || "No bio available",
          company: userData.company || "Not specified",
          location: userData.location || "Not specified",
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          languages,
          username, // Add username for GitHub stats widgets
        };

        setUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
        navigate("/"); // エラーが発生した場合はホームに戻る
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username, t, navigate]);

  const fetchUserLanguages = async (username: string): Promise<string[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
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
  };

  const handleTemplateSelect = (templateId: string) => {
    navigate(`/user/${username}/template/${templateId}`);
  };

  if (isLoading) {
    return <div className="text-center py-12">{t.loading}</div>;
  }

  if (error || !user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {t.chooseTemplate}
      </h2>
      <TemplateSelector
        templates={templates}
        selectedTemplate={null}
        onSelect={handleTemplateSelect}
      />
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {t.backToUserInput}
        </button>
      </div>
    </div>
  );
}

// プロフィールプレビュー画面コンポーネント
function ProfilePreviewPage() {
  const { username, templateId } = useParams<{
    username: string;
    templateId: string;
  }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language] = useState<Language>("en");
  const t = translations[language];

  const templates: Template[] = [
    {
      id: "modern",
      name: t.templates.modern.name,
      description: t.templates.modern.description,
      preview: t.templates.modern.preview,
    },
    {
      id: "minimalist",
      name: t.templates.minimalist.name,
      description: t.templates.minimalist.description,
      preview: t.templates.minimalist.preview,
    },
    {
      id: "detailed",
      name: t.templates.detailed.name,
      description: t.templates.detailed.description,
      preview: t.templates.detailed.preview,
    },
  ];

  // ユーザーデータとマークダウンの生成
  useEffect(() => {
    if (!username || !templateId) return;

    const fetchUserAndGenerateMarkdown = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error(
            response.status === 404 ? t.userNotFound : t.failedToFetchUser
          );
        }

        const userData: GitHubApiUser = await response.json();
        const languages = await fetchUserLanguages(username);

        const user: GitHubUser = {
          name: userData.name || username,
          bio: userData.bio || "No bio available",
          company: userData.company || "Not specified",
          location: userData.location || "Not specified",
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          languages,
          username, // Add username for GitHub stats widgets
        };

        setUser(user);

        // マークダウンの生成
        const template = templates.find((t) => t.id === templateId);
        if (template && user) {
          const markdown = template.preview
            .replace(/\[name\]/g, user.name)
            .replace(/\[bio\]/g, user.bio)
            .replace(/\[company\]/g, user.company)
            .replace(/\[location\]/g, user.location)
            .replace(/\[repos\]/g, user.public_repos.toString())
            .replace(/\[followers\]/g, user.followers.toString())
            .replace(/\[following\]/g, user.following.toString())
            .replace(
              /\[languages\]/g,
              user.languages.map((lang) => `"${lang}"`).join(", ")
            )
            .replace(/\[username\]/g, user.username);

          setGeneratedMarkdown(markdown);
        } else {
          throw new Error("Template not found");
        }
      } catch (error) {
        console.error("Error:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
        navigate("/"); // エラーが発生した場合はホームに戻る
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserAndGenerateMarkdown();
  }, [username, templateId, t, navigate]);

  const fetchUserLanguages = async (username: string): Promise<string[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
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
  };

  const handleBackToTemplates = () => {
    navigate(`/user/${username}`);
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generatedMarkdown);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([generatedMarkdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "github-profile.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return <div className="text-center py-12">{t.loading}</div>;
  }

  if (error || !user || !generatedMarkdown) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center space-y-12">
      <ProfilePreview
        markdown={generatedMarkdown}
        user={user}
        templateName={templates.find((t) => t.id === templateId)?.name || ""}
        onCopy={handleCopyMarkdown}
        onDownload={handleDownloadMarkdown}
        onBack={handleBackToTemplates}
        translations={{
          backToTemplates: t.backToTemplates,
          preview: t.preview,
          markdown: t.markdown,
          copyMarkdown: t.copyMarkdown,
          downloadMd: t.downloadMd,
          profileTitle: t.profileTitle,
          templateLabel: t.templateLabel,
        }}
      />
    </div>
  );
}

// 言語切り替えのメニュー
function LanguageSelector({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
}) {
  return (
    <div className="relative">
      <button
        id="languageButton"
        onClick={() =>
          document.getElementById("languageMenu")?.classList.toggle("hidden")
        }
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 bg-white rounded-md shadow-sm hover:bg-gray-50"
      >
        <Languages size={16} className="mr-2" />
        {language === "en" ? "English" : "日本語"}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="languageMenu"
        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden"
      >
        <div className="py-1">
          <button
            onClick={() => {
              setLanguage("en");
              document.getElementById("languageMenu")?.classList.add("hidden");
            }}
            className={`block px-4 py-2 text-sm w-full text-left ${
              language === "en"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              setLanguage("ja");
              document.getElementById("languageMenu")?.classList.add("hidden");
            }}
            className={`block px-4 py-2 text-sm w-full text-left ${
              language === "ja"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            日本語
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("languageMenu");
      const button = document.getElementById("languageButton");
      if (
        menu &&
        !menu.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        menu.classList.add("hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Github size={48} className="text-gray-800" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.appTitle}
          </h1>
          <p className="text-xl text-gray-600">{t.appDescription}</p>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:username" element={<TemplateSelectionPage />} />
          <Route
            path="/user/:username/template/:templateId"
            element={<ProfilePreviewPage />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
