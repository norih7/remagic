import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import { Item } from "@/lib/db";
import { systemLinks } from "@/constants";
import { getItemsData } from "@/lib/db";
import ItemList from "@/components/ItemList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "weapon-data";
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
        item.type === "sword" ||
        item.type === "halbert" ||
        item.type === "knuckle" ||
        item.type === "ax" ||
        item.type === "whistle" ||
        item.type === "shortSword" ||
        item.type === "spear" ||
        item.type === "cane" ||
        item.type === "greatSword" ||
        item.type === "bag" ||
        item.type === "mace" ||
        item.type === "gun",
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
          エターニアの武器アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載しています。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>武器: 剣</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.sword} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 短剣</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.shortSword} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 槍</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.spear} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 斧</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.ax} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ハルバート</SectionTitle>
          <p>装備可能: リッド</p>
          <ItemList data={filterData.halbert} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ナックル</SectionTitle>
          <p>装備可能: ファラ</p>
          <ItemList data={filterData.knuckle} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ホイッスル</SectionTitle>
          <p>装備可能: メルディ</p>
          <ItemList data={filterData.whistle} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 杖</SectionTitle>
          <p>装備可能: キール</p>
          <ItemList data={filterData.cane} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: メイス</SectionTitle>
          <p>装備可能: キール</p>
          <ItemList data={filterData.mace} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: バッグ</SectionTitle>
          <p>装備可能: チャット</p>
          <ItemList data={filterData.bag} />
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 銃</SectionTitle>
          <p>装備可能: フォッグ</p>
          <ItemList data={filterData.gun} />
        </div>
      </section>
    </article>
  );
}
