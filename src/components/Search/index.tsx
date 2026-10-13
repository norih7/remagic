"use client";

import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    PagefindUI: new (config: {
      element: string;
      showSubResults?: boolean;
      highlightParam?: string;
    }) => void;
  }
}

export default function Search() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initPagefind = () => {
      // すでに PagefindUI がグローバルに存在する場合（2回目以降の遷移や再描画時）
      if (window.PagefindUI) {
        // DOM要素（#search）が空か確認して初期化
        const searchContainer = document.getElementById("search");
        if (searchContainer && searchContainer.innerHTML === "") {
          new window.PagefindUI({
            element: "#search",
            showSubResults: true,
            highlightParam: "highlight",
          });
        }
        if (isMounted) setIsLoaded(true);
        return;
      }

      // 初回ロードの処理
      fetch("/pagefind/pagefind-ui.js", { method: "HEAD" })
        .then((res) => {
          if (!res.ok) {
            if (isMounted) setIsDevMode(true);
            return;
          }

          // すでにスクリプトタグがある場合
          if (document.getElementById("pagefind-ui-script")) {
            // 少し待ってからインスタンス化を試みる
            const timer = setInterval(() => {
              if (window.PagefindUI) {
                clearInterval(timer);
                initPagefind();
              }
            }, 50);
            return;
          }

          // CSSの読み込み
          if (!document.getElementById("pagefind-ui-css")) {
            const link = document.createElement("link");
            link.id = "pagefind-ui-css";
            link.rel = "stylesheet";
            link.href = "/pagefind/pagefind-ui.css";
            document.head.appendChild(link);
          }

          // JSの読み込み
          const script = document.createElement("script");
          script.id = "pagefind-ui-script";
          script.src = "/pagefind/pagefind-ui.js";
          script.async = true;

          script.onload = () => {
            if (isMounted) {
              initPagefind();
            }
          };

          document.body.appendChild(script);
        })
        .catch(() => {
          if (isMounted) setIsDevMode(true);
        });
    };

    initPagefind();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Pagefind UI が描画されるターゲット要素 */}
      <div id="search" className="pagefind-ui"></div>

      {!isLoaded && !isDevMode && (
        <p className="text-gray-500 text-sm">Loading...</p>
      )}

      {isDevMode && (
        <div className="p-4 text-sm text-amber-700 bg-amber-50 rounded-lg">
          開発環境（npm run
          dev）のため、Pagefindのインデックスがありません。検索機能を確認するには{" "}
          <code>npm run build && npm start</code> を実行してください。
        </div>
      )}
    </div>
  );
}
