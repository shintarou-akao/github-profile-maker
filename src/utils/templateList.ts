import { Template } from "../types";
import { Translations } from "../translations";

// 利用可能なテンプレートリストを返す
export function getTemplates(t: Translations): Template[] {
  if (!t || !t.templates) {
    return [];
  }

  try {
    return [
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
      {
        id: "creative",
        name: t.templates.creative.name,
        description: t.templates.creative.description,
        preview: t.templates.creative.preview,
      },
    ];
  } catch {
    return [];
  }
}
