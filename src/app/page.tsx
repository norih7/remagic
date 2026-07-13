import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { storyLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";
import { skillLinks } from "@/constants";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

// 攻略記事やカテゴリのダミーデータ
type Link = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};
const featuredLinks: Link[] = [];
featuredLinks.push(storyLinks["guide3"]);
featuredLinks.push(storyLinks["guide4"]);
featuredLinks.push(subeventLinks["skill-chat"]);
featuredLinks.push(systemLinks["rune"]);
featuredLinks.push(systemLinks["recipe"]);
featuredLinks.push(skillLinks["magic"]);

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "RE:MAGIC テイルズオブエターニア攻略";
export async function generateMetadata() {
  return {
    title,
    description:
      "テイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開！リマスター版にも対応したクリーンな攻略サイトです。",
  };
}

export default async function HomePage() {
  const subTitle = "テイルズオブエターニア攻略情報トップ";
  return (
    <div style={{ padding: "0px" }}>
      <SetPageTitle title={subTitle} />
      <main className="space-y-12">
        <h1 className="text-lg font-bold mb-4">このサイトについて</h1>
        <p className="text-slate-1000">
          RE:MAGICではリマスター版に対応したテイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開しています！スマホに最適したシンプルでクリーンなサイトを目指しています。
        </p>

        {/* 2. 注目カテゴリセクション */}
        <section>
          <SectionTitle>注目コンテンツ</SectionTitle>
          <ContentLinks list={featuredLinks} />
        </section>

        {/* 3. 更新履歴セクション */}
        <section className="">
          <SectionTitle type="history">最新更新履歴</SectionTitle>
          <ul className="space-y-2">
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/13</span>
              <span>
                <Link
                  href="/systems/recipe"
                  className="hover:text-cyan-400 transition-colors"
                >
                  料理一覧/マスター料理
                </Link>
                をアップデート 食材詳細ページ（購入場所）のリンクを追加
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/11</span>
              <span>
                <Link
                  href="/systems/recipe"
                  className="hover:text-cyan-400 transition-colors"
                >
                  料理一覧/マスター料理
                </Link>
                をアップデート ワンダーシェフの場所一覧を公開しました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/10</span>
              <span>
                <Link
                  href="/systems/buttle"
                  className="hover:text-cyan-400 transition-colors"
                >
                  戦闘解説
                </Link>
                をアップデート 戦闘中の特殊操作を追記しました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/07</span>
              <span>
                <Link
                  href="/systems/rune"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ルーンボトル
                </Link>
                をアップデートしアイテム変化のオススメ度をつけました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/06/20</span>
              サイトを公開しました
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
