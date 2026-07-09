/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://remagic.brclover.com", // 実際のドメインに合わせてください
  generateRobotsTxt: false,
  outDir: "out", // next build 後の出力先に指定
  // ここで除外設定を行います
  exclude: ["/items/*"],
};
