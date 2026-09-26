import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import { Item } from "@/lib/db";
import { systemLinks } from "@/constants";
import { getItemsData } from "@/lib/db";
import ItemList from "@/components/ItemList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "defense-data";
const title = systemLinks[pageKey].title;
const description = systemLinks[pageKey].seoDesc;
const canonical = systemLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const itemsData = await getItemsData();
  const filterData = itemsData
    .filter(
      (item) =>
        item.type === "armor" ||
        item.type === "cloak" ||
        item.type === "robe" ||
        item.type === "shield" ||
        item.type === "bracelet" ||
        item.type === "helmet" ||
        item.type === "ribbon" ||
        item.type === "circlet" ||
        item.type === "hat",
    )
    .reduce(
      (acc, item) => {
        if (acc[item.type]) {
          acc[item.type].push(item);
        } else {
          acc[item.type] = [];
          acc[item.type].push(item);
        }

        return acc;
      },
      {} as Record<string, Item[]>,
    );

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          エターニアの防具アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載しています。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 鎧</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.armor} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 盾</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.shield} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 兜</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.helmet} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: クローク</SectionTitle>
          <p>装備可能: ファラ、メルディ、チャット</p>
          <ItemList data={filterData.cloak} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: ローブ</SectionTitle>
          <p>装備可能: キール、フォッグ</p>
          <ItemList data={filterData.robe} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: リボン</SectionTitle>
          <p>装備可能: ファラ、メルディ</p>
          <ItemList data={filterData.ribbon} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: ブレスレット</SectionTitle>
          <p>装備可能: ファラ、メルディ、チャット、フォッグ</p>
          <ItemList data={filterData.bracelet} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: サークレット</SectionTitle>
          <p>装備可能: キール ※「クレスのバンダナ」のみリッドが装備可能</p>
          <ItemList data={filterData.circlet} />
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 帽子</SectionTitle>
          <p>装備可能: チャット</p>
          <ItemList data={filterData.hat} />
        </div>
      </section>
    </article>
  );
}
