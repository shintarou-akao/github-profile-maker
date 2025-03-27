import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInput } from "../components/UserInput";
import { useLanguage } from "../contexts/LanguageContext";

// レート制限エラー定数
const RATE_LIMIT_ERROR = "rate_limit_exceeded";

export function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleUsernameSubmit = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      // レート制限かどうかチェック
      if (
        response.status === 403 &&
        parseInt(response.headers.get("x-ratelimit-remaining") || "1") === 0
      ) {
        throw new Error(RATE_LIMIT_ERROR);
      }

      if (!response.ok) {
        throw new Error(
          response.status === 404 ? t.userNotFound : t.failedToFetchUser
        );
      }

      // ユーザーが存在すれば、テンプレート選択画面に遷移
      navigate(`/user/${username}`);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error instanceof Error && error.message === RATE_LIMIT_ERROR) {
        setError(t.rateLimitExceeded);
      } else {
        setError(error instanceof Error ? error.message : t.genericError);
      }
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
