import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { guideLinks, categoryLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "guides";
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
        <h2 className="text-lg font-bold mb-2 !border-none">プレイガイド</h2>
        <p className="text-slate-1000">
          リマスター版の違い、効率的な攻略法などを解説しています。
        </p>
      </div>
      <ContentLinks list={Object.values(guideLinks)} />
    </article>
  );
}
