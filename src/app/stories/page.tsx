import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";
import { storyLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " ストーリーガイド";
export const metadata = {
  title,
  description:
    "エターニアのストーリー攻略情報。ダンジョン内で入手できるアイテム情報や、詰まりやすいダンジョンはマップ付きで解説！",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2 !border-none">特技/晶霊術</h2>
        <p className="text-slate-1000">
          ラシュアンから水晶霊の河、セレスティア、バリル城、シゼル城まで、序盤から終盤までのストーリー攻略をマップ付きで解説しています。
        </p>
      </div>
      <ContentLinks list={Object.values(storyLinks)} />
    </article>
  );
}
