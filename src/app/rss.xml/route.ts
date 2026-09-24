// app/rss.xml/route.ts
import { NextResponse } from "next/server";
import {
  guideLinks,
  extraLinks,
  deepLinks /*, storyLinks, systemLinks, subeventLinks */,
} from "@/constants";

export const dynamic = "force-static";

const SITE_URL = "https://remagic.brclover.com";
const FEED_URL = SITE_URL + "/rss.xml";
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
    ...Object.values(extraLinks),
    ...Object.values(deepLinks),
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

      const descriptionTag = item.desc
        ? "<description>" + escapeXml(item.desc) + "</description>"
        : "";

      // バナー画像タグ(絶対URL化)。lengthを持たないmedia:contentのみ使用
      let imageTag = "";
      if (item.image) {
        const imageUrl = SITE_URL + item.image;
        imageTag =
          '<media:content url="' + escapeXml(imageUrl) + '" medium="image" />';
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
        imageTag,
        "</item>",
      ];

      return parts.join("\n      ");
    })
    .join("\n");

  const rss =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
    "  <channel>\n" +
    "    <title>" +
    escapeXml(SITE_TITLE) +
    "</title>\n" +
    "    <link>" +
    SITE_URL +
    "</link>\n" +
    '    <atom:link href="' +
    FEED_URL +
    '" rel="self" type="application/rss+xml" />\n' +
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
    headers: { "Content-Type": "application/rss+xml; charset=UTF-8" },
  });
}
