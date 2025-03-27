import { Languages } from "lucide-react";
import { Language } from "../translations";

interface LanguageSelectorProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProps) {
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
