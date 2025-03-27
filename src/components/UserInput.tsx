import React, { useState } from "react";
import { Search } from "lucide-react";

interface UserInputTranslations {
  enterUsername: string;
  searchUser: string;
  loading: string;
}

interface UserInputProps {
  onSubmit: (username: string) => void;
  isLoading: boolean;
  error: string | null;
  translations: UserInputTranslations;
}

export function UserInput({
  onSubmit,
  isLoading,
  error,
  translations: t,
}: UserInputProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t.enterUsername}
          className={`w-full px-4 py-3 pl-12 text-lg rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          disabled={isLoading}
        />
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={!username.trim() || isLoading}
        className={`mt-4 w-full py-3 px-6 text-white font-medium rounded-lg transition-colors
          ${
            isLoading || !username.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {isLoading ? t.loading : t.searchUser}
      </button>
    </form>
  );
}
