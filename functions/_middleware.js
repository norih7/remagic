export async function onRequest(context) {
  const url = new URL(context.request.url);

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
