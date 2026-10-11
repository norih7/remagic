import ContentLinks from "@/components/ContentLinks";
import { storyLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";
import { skillLinks } from "@/constants";
import { extraLinks } from "@/constants";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import Main from "@/components/SiteLayout/Main";
import UpdateList from "@/components/UpdateList";

// 攻略記事やカテゴリのダミーデータ
type Link = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};
const featuredLinks: Link[] = [];
featuredLinks.push(extraLinks["valkyrie"]);
featuredLinks.push(subeventLinks["lens"]);
featuredLinks.push(subeventLinks["flying-board"]);
featuredLinks.push(storyLinks["guide3"]);
featuredLinks.push(storyLinks["guide4"]);
featuredLinks.push(extraLinks["aifread"]);
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
      "テイルズオブエターニア（TOE）リマスター版対応の攻略サイト。序盤から終盤までのストーリー攻略、晶霊術・特技一覧、装備品やアイテムのデータ、レンズの入手場所、隠しダンジョンや闘技場の攻略情報まで画像付きで詳しく解説しています。スマホでも読みやすいシンプルな設計で、初めての方にもわかりやすくまとめています。",
    alternates: {
      canonical: "/",
    },
  };
}

export default async function HomePage() {
  const subTitle = "エターニア攻略トップ";
  return (
    <Main title={subTitle}>
      <article className="space-y-12">
        <h2 className="text-lg font-bold mb-2 !border-none">
          テイルズオブエターニア攻略
        </h2>
        <p className="text-slate-1000">
          RE:MAGICではリマスター版に対応したテイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開しています！スマホに最適したシンプルでクリーンなサイトを目指しています。
        </p>

        {/* 2. 注目カテゴリセクション */}
        <section>
          <SectionTitle>注目コンテンツ</SectionTitle>
          <ContentLinks list={featuredLinks} />
        </section>

        {/* 3. 更新履歴セクション */}
        <section>
          <SectionTitle type="history">最新更新履歴</SectionTitle>
          <div className="w-full">
            <UpdateList />
          </div>
        </section>
      </article>
    </Main>
  );
}
