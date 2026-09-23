export async function onRequest(context) {
  // const url = new URL(context.request.url);
  // Google Search Console確認ファイルだけは、自動リダイレクトを一切経由せず直接ファイルを返す
  // if (/^\/google[a-z0-9]+\.html$/i.test(url.pathname)) {
  //   return context.env.ASSETS.fetch(context.request);
  // }
  // if (url.hostname === "remagic.pages.dev") {
  //   url.hostname = "remagic.brclover.com";
  //   return new Response(null, {
  //     status: 301,
  //     headers: {
  //       Location: url.toString(),
  //       "X-Robots-Tag": "noindex",
  //     },
  //   });
  // }
  return context.next();
}
