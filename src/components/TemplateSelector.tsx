import { Template } from "../types";

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string | null;
  onSelect: (templateId: string) => void;
}

export function TemplateSelector({
  templates,
  selectedTemplate,
  onSelect,
}: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all
            ${
              selectedTemplate === template.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
          onClick={() => onSelect(template.id)}
        >
          <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
          <p className="text-gray-600 mb-4">{template.description}</p>
          <div className="bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{template.preview}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
