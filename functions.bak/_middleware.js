// Google Search Console確認ファイル一覧(パス → 中身)
const GOOGLE_VERIFICATIONS = {
  "/google14bc5ea00ba111ac.html":
    "google-site-verification: google14bc5ea00ba111ac.html",
  // 他にも確認ファイルが増えたらここに追加
};

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // If the request is to pages.dev, return 410 Gone
  if (url.hostname.endsWith(".pages.dev")) {
    return new Response(
      `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=https://remagic.brclover.com${url.pathname}"><title>Moved</title></head><body><p>This page has moved to <a href="https://remagic.brclover.com${url.pathname}">https://remagic.brclover.com${url.pathname}</a></p></body></html>`,
      {
        status: 410,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex",
        },
      },
    );
  }

  // Google確認ファイルはASSETSを経由させず直接返す(ASSETS.fetchはリダイレクトルールを再適用してしまうため)
  const verificationBody = GOOGLE_VERIFICATIONS[url.pathname];
  if (verificationBody !== undefined) {
    return new Response(verificationBody, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (url.hostname === "remagic.pages.dev") {
    url.hostname = "remagic.brclover.com";
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
        "X-Robots-Tag": "noindex",
      },
    });
  }
  if (url.pathname === "/systems/master-recipe") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: "https://remagic.brclover.com/deeps/master-recipe",
      },
    });
  }
  if (url.pathname === "/systems/buttle") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: "https://remagic.brclover.com/guides/buttle",
      },
    });
  }
  if (url.pathname === "/systems/skill") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: "https://remagic.brclover.com/guides/skill",
      },
    });
  }
  return context.next();
}
