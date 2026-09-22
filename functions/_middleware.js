export function onRequest(context) {
  const url = new URL(context.request.url);

  // Google Search Console確認ファイルだけ例外的にリダイレクトを回避
  if (/^\/google[a-z0-9]+\.html$/.test(url.pathname)) {
    return context.next();
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
