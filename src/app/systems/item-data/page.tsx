import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import ToC from "@/components/ToC";
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

const toc = {
  "consumable-items": "消費アイテム一覧データ",
  ingredients: "食材一覧データ",
  "other-items": "その他アイテムデータ",
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
        <Section>
          <PageSummary>
            エターニアの消費アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載していますのでぜひご確認ください。
          </PageSummary>

          <ToC list={toc} />
        </Section>


        <Section>
          <SectionTitle id="consumable-items">
            {toc["consumable-items"]}
          </SectionTitle>
          <ItemList data={filterData.useItem} />
        </Section>

        <Section>
          <SectionTitle id="ingredients">{toc["ingredients"]}</SectionTitle>
          <ItemList data={filterData.food} />
        </Section>
        <Section>
          <SectionTitle id="other-items">{toc["other-items"]}</SectionTitle>
          <ItemList data={filterData.otherItem} />
        </Section>
      </article>
    </Main>
  );
}
