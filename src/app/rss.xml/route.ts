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

// 画像の拡張子からMIMEタイプを推測する
function getMimeType(url: string) {
  if (url.endsWith(".png")) return "image/png";
  if (url.endsWith(".webp")) return "image/webp";
  if (url.endsWith(".gif")) return "image/gif";
  return "image/jpeg"; // .jpg / .jpeg のデフォルト
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
      const link = SITE_URL + item.path;
      const pubDate = new Date(item.updatedAt ?? item.createdAt).toUTCString();

      // 説明文タグ
      const descriptionTag = item.desc
        ? "<description>" + escapeXml(item.desc) + "</description>"
        : "";

      // バナー画像タグ(絶対URL化)
      let imageTags = "";
      if (item.image) {
        const imageUrl = SITE_URL + item.image;
        const mimeType = getMimeType(imageUrl);
        imageTags =
          '<enclosure url="' +
          escapeXml(imageUrl) +
          '" type="' +
          mimeType +
          '" />' +
          '<media:content url="' +
          escapeXml(imageUrl) +
          '" medium="image" />';
      }

      const parts = [
        "<item>",
        "<title>" +
          escapeXml(item.title) +
          " | RE:MAGIC テイルズオブエターニア攻略</title>",
        "<link>" + link + "</link>",
        "<guid>" + link + "</guid>",
        "<pubDate>" + pubDate + "</pubDate>",
        descriptionTag,
        imageTags,
        "</item>",
      ];

      return parts.join("\n      ");
    })
    .join("\n");

  const rss =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">\n' +
    "  <channel>\n" +
    "    <title>" +
    escapeXml(SITE_TITLE) +
    "</title>\n" +
    "    <link>" +
    SITE_URL +
    "</link>\n" +
    "    <description>" +
    escapeXml(SITE_DESCRIPTION) +
    "</description>\n" +
    "    <language>ja</language>\n" +
    "    <lastBuildDate>" +
    new Date().toUTCString() +
    "</lastBuildDate>\n" +
    "    " +
    rssItems +
    "\n" +
    "  </channel>\n" +
    "</rss>";

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
}
