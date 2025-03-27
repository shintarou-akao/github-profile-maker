import { createContext, useContext, useState, ReactNode } from "react";
import { Language, Translations, translations } from "../translations";

// 言語コンテキストを作成
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 言語コンテキストを使用するためのフック
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // ブラウザの言語設定を取得
    const browserLang = navigator.language.split("-")[0];
    // サポートしている言語かチェック
    return browserLang === "ja" ? "ja" : "en";
  });

  const t = translations[language];

  // 言語コンテキストの値
  const languageContextValue = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
