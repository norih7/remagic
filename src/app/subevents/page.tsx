import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";
import { subeventLinks, categoryLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "subevents";
const title = categoryLinks[pageKey].title;
const canonical = categoryLinks[pageKey].path;
const description = categoryLinks[pageKey].seoDesc;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2 !border-none">サブイベント</h2>
        <p className="text-slate-1000">
          レンズ収集やカトリーヌの恋愛、クレーメルボール、闘技場、隠し大晶霊など、ストーリーの合間に発生する寄り道イベントを進行順にまとめ、発生条件や入手アイテムを画像付きで解説しています。{" "}
        </p>
      </div>
      <ContentLinks list={Object.values(subeventLinks)} />
    </article>
  );
}
