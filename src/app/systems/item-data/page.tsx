
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import { Item } from "@/lib/db";
import { systemLinks } from "@/constants";
import { getItemsData } from "@/lib/db";
import ItemList from "@/components/ItemList";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "item-data";
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
  // const filterData = itemsData.filter(
  //   (item) => item.type === "useItem" || item.type === "otherItem",
  // );
  const filterData = itemsData
    .filter(
      (item) =>
        item.type === "useItem" ||
        item.type === "otherItem" ||
        item.type === "food",
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
    <Main title={title}>
      <article>
<PageSummary>
        <p>
          エターニアの消費アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載していますのでぜひご確認ください。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <Section>
        <SectionTitle>消費アイテム一覧データ</SectionTitle>
        <ItemList data={filterData.useItem} />
      </Section>
      <Section>
        <SectionTitle>食材一覧データ</SectionTitle>
        <ItemList data={filterData.food} />
      </Section>
      <Section>
        <SectionTitle>その他アイテムデータ</SectionTitle>
        <ItemList data={filterData.otherItem} />
      </Section>
    </article>
    </Main>
  );
}
