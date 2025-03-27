import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProfilePreview } from "../components/ProfilePreview";
import { useLanguage } from "../contexts/LanguageContext";
import { Toast } from "../components/ui/Toast";
import { GitHubUser } from "../types";
import { fetchGitHubUser } from "../utils/githubApi";
import { getTemplates } from "../utils/templateList";
import { generateMarkdownFromTemplate } from "../utils/templateUtils";

// レート制限エラー定数
const RATE_LIMIT_ERROR = "rate_limit_exceeded";

export function ProfilePreviewPage() {
  const { username, templateId: urlTemplateId } = useParams<{
    username: string;
    templateId: string;
  }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const { t } = useLanguage();

  // URLパラメータとセッションストレージから取得したテンプレートIDを組み合わせて使用
  const templateId = useMemo(() => {
    // まずURLからのテンプレートIDを優先
    if (urlTemplateId) {
      return urlTemplateId;
    }

    // 次にセッションストレージからの復元を試みる
    try {
      const storedTemplateId = sessionStorage.getItem("selectedTemplateId");
      if (storedTemplateId) {
        return storedTemplateId;
      }
    } catch {
      // セッションストレージからの読み込みエラー
    }

    // どちらも取得できなかった場合はnullを返す
    return null;
  }, [urlTemplateId]);

  // useMemoを使ってtemplatesが不必要に再生成されないようにする
  const templates = useMemo(() => getTemplates(t), [t]);

  // テンプレートIDが無い場合はテンプレート選択画面に戻す
  useEffect(() => {
    if (!templateId && username) {
      navigate(`/user/${username}`);
    }
  }, [templateId, username, navigate]);

  // ユーザーデータとマークダウンの生成
  useEffect(() => {
    if (!username || !templateId) {
      return;
    }

    let isMounted = true;

    const fetchUserAndGenerateMarkdown = async () => {
      if (!isMounted) return;

      setIsLoading(true);
      setError(null);
      try {
        const userData = await fetchGitHubUser(
          username,
          t.userNotFound,
          t.failedToFetchUser,
          t.noBioAvailable,
          t.notSpecified
        );

        if (!isMounted) return;
        setUser(userData);

        // マークダウンの生成
        const template = templates.find((t) => t.id === templateId);

        if (template && userData) {
          try {
            const markdown = generateMarkdownFromTemplate(template, userData);
            if (isMounted) {
              setGeneratedMarkdown(markdown);
            }
          } catch {
            if (isMounted) {
              setError(t.genericError);
            }
          }
        } else {
          if (!template) {
            throw new Error(t.templateNotFound);
          } else {
            throw new Error(t.genericError);
          }
        }
      } catch (error) {
        if (isMounted) {
          if (error instanceof Error && error.message === RATE_LIMIT_ERROR) {
            setError(t.rateLimitExceeded);
          } else {
            setError(error instanceof Error ? error.message : t.genericError);
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchUserAndGenerateMarkdown();

    return () => {
      isMounted = false;
    };
  }, [username, templateId, t]);

  const handleBackToTemplates = () => {
    navigate(`/user/${username}`);
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setShowToast(true);
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

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-800 mb-4">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ホームに戻る
        </button>
      </div>
    );
  }

  if (!user || !generatedMarkdown) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-800 mb-4">必要なデータを読み込めませんでした</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ホームに戻る
        </button>
      </div>
    );
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
      <Toast
        message={t.copiedToClipboard || "クリップボードにコピーしました"}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
