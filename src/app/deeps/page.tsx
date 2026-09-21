import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { deepLinks, categoryLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "deeps";
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
      <p className="mb-8">準備中。</p>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2 !border-none">やりこみ</h2>
        <p className="text-slate-1000">
          ブルーアース、薬草集め、アイテムドロップ、レベル上げなどのやり込み解説です。
        </p>
      </div>
      <ContentLinks list={Object.values(deepLinks)} />
    </article>
  );
}
