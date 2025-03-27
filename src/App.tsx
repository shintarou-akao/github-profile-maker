import { Routes, Route, Navigate } from "react-router-dom";
import { Github } from "lucide-react";
import { HomePage } from "./pages/HomePage";
import { TemplateSelectionPage } from "./pages/TemplateSelectionPage";
import { ProfilePreviewPage } from "./pages/ProfilePreviewPage";
import { LanguageSelector } from "./components/LanguageSelector";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useLanguageMenu } from "./hooks/useLanguageMenu";

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  useLanguageMenu();

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

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
