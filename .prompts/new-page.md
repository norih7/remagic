# 新規ページ作成プロンプト

## ルール

1. ルートは<article>で定義し、セクションごとに<section className="mb-12">でマークアップする
2. ページ上部には概要文を設ける
   a. 概要には `@/components/PageSummary` を使用する
3. sectionの主見出しには `@/components/SectionTitle` を利用する
4. sectionの副見出しには<h3>のマークアップを用いる
   a. SectionTitleをさらに細分化したい場合は<h3>を用います
5. 余白ルール
   a. SectionTitleが含まれるコンテンツは<section className="mb-12">でマークアップ
   b. h3が含まれるコンテンツは<div className="mb-8">でマークアップ
6. ヒントや警告は `@/components/Information` を利用してください
7. metadataのexportはエージェント側では編集することはありません
   a. コードの構造や書き方は固定で、pageKeyは `sample` の固定値を設定してください
   b. 最後にオーナー側で直接適切なものへ修正します
8. ページ作成後、SEO用のdescription（100〜150文字）をプロンプトに出力してください
   a. 内容を確認して最後にオーナー側で `@/constants/index.ts` へ反映します

## テンプレート

```
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import { guideLinks } from "@/constants";

// 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

// コードの構造・書き方は固定。pageKeyは "sample" の固定値のまま出力する（オーナー側で後から修正）
const pageKey = "sample";
const title = guideLinks[pageKey].title;
const description = guideLinks[pageKey].seoDesc;
const canonical = guideLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default function Page() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>概要文</PageSummary>
      <section className="mb-12">
        <SectionTitle>主見出し</SectionTitle>
        <p>文章1</p>
        <p>文章2</p>
        <div className="mb-8">
           <h3>副見出し</h3>
           <p>文章1</p>
           <p>文章2</p>
        </div>
      </section>
    </article>
  );
}
```
