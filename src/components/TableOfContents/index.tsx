"use client";
import { LuList } from "react-icons/lu";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  containerId?: string; // 記事本文を囲む要素のID
}

export default function TableOfContents({
  containerId = "main-content",
}: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // h2 のみを取得する
    const elements = container.querySelectorAll("h2");
    const items: TocItem[] = [];

    elements.forEach((element, index) => {
      // idがない場合は自動で付与する
      if (!element.id) {
        element.id = `heading-${index + 1}`;
      }
      items.push({
        id: element.id,
        text: element.textContent || "",
      });
    });

    setToc(items);
  }, [containerId]);

  if (toc.length === 0) return null;

  return (
    <nav>
      <div className="flex items-center gap-2 mb-3 pb-1 border-b border-gray-800">
        {/* <div className="font-bold text-lg flex items-center">
          <LuList className="mr-1" />
          目次
        </div> */}
        <h3>目次</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block text-[#4a3b32] hover:text-[#b35900] transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
