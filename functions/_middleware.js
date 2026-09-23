// Google Search Console確認ファイル一覧(パス → 中身)
const GOOGLE_VERIFICATIONS = {
  "/google14bc5ea00ba111ac.html":
    "google-site-verification: google14bc5ea00ba111ac.html",
  // 他にも確認ファイルが増えたらここに追加
};

export async function onRequest(context) {
  const url = new URL(context.request.url);

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
  return context.next();
}
