// app/rss.xml/route.ts
import { NextResponse } from "next/server";
import {
  guideLinks /*, storyLinks, systemLinks, subeventLinks */,
} from "@/constants";

export const dynamic = "force-static";

const SITE_URL = "https://remagic.brclover.com";
const SITE_TITLE = "RE:MAGIC - テイルズオブエターニア攻略";
const SITE_DESCRIPTION =
  "テイルズオブエターニア(TOE)リマスター版対応の攻略サイト";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  // 複数のLinksオブジェクトを1つの配列にまとめる
  const allLinks = [
    ...Object.values(guideLinks),
    // ...Object.values(storyLinks),
    // ...Object.values(systemLinks),
    // ...Object.values(subeventLinks),
  ];

  // createdAtがまだ無いページ(移行前の既存ページなど)は除外
  const feedItems = allLinks.filter((item) => item.createdAt);

  const sortedItems = feedItems.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  const rssItems = sortedItems
    .map((item) => {
      const link = `${SITE_URL}${item.path}`;
      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${new Date(item.updatedAt).toUTCString()}</pubDate>
      ${item.desc ? `<description>${escapeXml(item.desc)}</description>` : ""}
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
}
