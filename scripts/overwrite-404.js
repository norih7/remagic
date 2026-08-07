const fs = require("fs");
const path = require("path");

// Next.jsが吐き出した「余計なスクリプト付きの404.html」のパス
const target = path.join(__dirname, "../out/404.html");

// あなたが本当に望む「余計なものが一切ないプレーンなHTML」
const cleanContent = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>404 Not Found</title>
</head>
<body>
    <h1>404 - ページが見つかりませんでした</h1>
    <p><a href="/">トップページに戻る</a></p>
</body>
</html>`;

if (fs.existsSync(target)) {
  fs.writeFileSync(target, cleanContent);
  console.log("--- override 404.html ---");
} else {
  console.error(
    "out/404.html が見つかりませんでした。ビルドが完了しているか確認してください。",
  );
}
