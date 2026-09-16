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
  const allLinks = [
    ...Object.values(guideLinks),
    // ...Object.values(storyLinks),
  ];

  // createdAtがある項目だけを対象にし、その時点でcreatedAtの存在を型として保証する
  const feedItems = allLinks.filter(
    (item): item is typeof item & { createdAt: string } =>
      Boolean(item.createdAt),
  );

  const sortedItems = feedItems.sort((a, b) => {
    const dateA = new Date(a.updatedAt ?? a.createdAt).getTime();
    const dateB = new Date(b.updatedAt ?? b.createdAt).getTime();
    return dateB - dateA;
  });

  const rssItems = sortedItems
    .map((item) => {
      const link = `${SITE_URL}${item.path}`;
      const pubDate = new Date(item.updatedAt ?? item.createdAt).toUTCString();
      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
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
