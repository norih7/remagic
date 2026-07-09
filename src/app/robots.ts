import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // すべてのクローラーを許可
        userAgent: "*",
        allow: "/",
        // 必要に応じて除外パスを指定
        // disallow: ['/admin', '/api', '/private'],
      },
      // AIクローラーを明示的に許可
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],
    sitemap: "https://remagic.brclover.com/sitemap.xml",
  };
}
