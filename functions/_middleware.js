export function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'remagic.pages.dev') {
    url.hostname = 'remagic.brclover.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
