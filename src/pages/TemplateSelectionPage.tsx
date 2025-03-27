import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { TemplateSelector } from "../components/TemplateSelector";
import { useLanguage } from "../contexts/LanguageContext";
import { GitHubUser } from "../types";
import { fetchGitHubUser } from "../utils/githubApi";
import { getTemplates } from "../utils/templateList";

export function TemplateSelectionPage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const templates = useMemo(() => getTemplates(t), [t]);

  // ユーザーデータをフェッチ
  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
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
        setUser(userData);
      } catch (error) {
        setError(error instanceof Error ? error.message : t.genericError);
        navigate("/"); // エラーが発生した場合はホームに戻る
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username, t, navigate]);

  const handleTemplateSelect = (templateId: string) => {
    // テンプレートIDを確認する
    const template = templates.find((t) => t.id === templateId);
    if (!template) {
      return;
    }

    // セッションストレージに選択したテンプレートIDを保存
    try {
      sessionStorage.setItem("selectedTemplateId", templateId);
    } catch {
      // セッションストレージへの保存失敗
    }

    // 詳細ページへ遷移
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
