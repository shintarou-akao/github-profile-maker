import { GitHubUser, Template } from "../types";

// テンプレートからマークダウンを生成する
export function generateMarkdownFromTemplate(
  template: Template,
  user: GitHubUser
): string {
  if (!template || !template.preview) {
    throw new Error("テンプレートが無効です");
  }

  if (!user) {
    throw new Error("ユーザーデータが無効です");
  }

  try {
    let markdown = template.preview
      .replace(/\[name\]/g, user.name || "")
      .replace(/\[bio\]/g, user.bio || "")
      .replace(/\[company\]/g, user.company || "")
      .replace(/\[location\]/g, user.location || "")
      .replace(/\[repos\]/g, user.public_repos?.toString() || "0")
      .replace(/\[followers\]/g, user.followers?.toString() || "0")
      .replace(/\[following\]/g, user.following?.toString() || "0")
      .replace(
        /\[languages\]/g,
        user.languages?.map((lang) => `"${lang}"`).join(", ") || ""
      )
      .replace(/\[username\]/g, user.username || "");

    // 条件付き表示を削除し、常に表示するように修正
    markdown = markdown
      .replace(/{{company}}/g, `- 🏢 Currently working at **${user.company}**`)
      .replace(
        /{{company_ja}}/g,
        `- 🏢 現在 **${user.company}** で働いています`
      )
      .replace(/{{company_typescript}}/g, `  company: '${user.company}',`)
      .replace(/{{company_typescript_ja}}/g, `  所属: '${user.company}',`)
      .replace(/{{company_detailed}}/g, `- 🏢 Working at **${user.company}**`)
      .replace(
        /{{company_detailed_ja}}/g,
        `- 🏢 **${user.company}**で働いています`
      );

    markdown = markdown
      .replace(/{{location}}/g, `- 📍 Based in **${user.location}**`)
      .replace(
        /{{location_ja}}/g,
        `- 📍 **${user.location}** を拠点としています`
      )
      .replace(/{{location_typescript}}/g, `  location: '${user.location}',`)
      .replace(/{{location_typescript_ja}}/g, `  拠点: '${user.location}',`)
      .replace(/{{location_detailed}}/g, `- 📍 Located in **${user.location}**`)
      .replace(
        /{{location_detailed_ja}}/g,
        `- 📍 **${user.location}**に住んでいます`
      )
      .replace(/{{location_contact}}/g, `- Location: ${user.location}`)
      .replace(/{{location_contact_ja}}/g, `- 所在地: ${user.location}`);

    return markdown;
  } catch {
    throw new Error("テンプレート置換処理に失敗しました");
  }
}
