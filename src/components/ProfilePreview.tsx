import { useState } from "react";
import { Download, Copy, ArrowLeft, Code, Eye } from "lucide-react";
import { GitHubUser } from "../types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface ProfilePreviewTranslations {
  backToTemplates: string;
  preview: string;
  markdown: string;
  copyMarkdown: string;
  downloadMd: string;
  profileTitle: string;
  templateLabel: string;
}

interface ProfilePreviewProps {
  markdown: string;
  user: GitHubUser;
  templateName: string;
  onCopy: () => void;
  onDownload: () => void;
  onBack: () => void;
  translations: ProfilePreviewTranslations;
}

export function ProfilePreview({
  markdown,
  user,
  templateName,
  onCopy,
  onDownload,
  onBack,
  translations: t,
}: ProfilePreviewProps) {
  const [activeTab, setActiveTab] = useState<"markdown" | "preview">("preview");

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              {t.backToTemplates}
            </button>
            <div className="text-right">
              <h2 className="text-2xl font-bold">
                {user.name}
                {t.profileTitle}
              </h2>
              <p className="text-sm text-gray-600">
                {t.templateLabel}: {templateName}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "preview"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Eye size={16} className="mr-2" />
                {t.preview}
              </button>
              <button
                onClick={() => setActiveTab("markdown")}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "markdown"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Code size={16} className="mr-2" />
                {t.markdown}
              </button>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={onCopy}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <Copy size={16} className="mr-2" />
                {t.copyMarkdown}
              </button>
              <button
                onClick={onDownload}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <Download size={16} className="mr-2" />
                {t.downloadMd}
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-50 min-h-[500px]">
          {activeTab === "markdown" ? (
            <pre className="whitespace-pre-wrap break-words">
              <code className="text-sm">{markdown}</code>
            </pre>
          ) : (
            <div className="prose max-w-none overflow-hidden">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ ...props }) => (
                    <img {...props} className="max-w-full" />
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
