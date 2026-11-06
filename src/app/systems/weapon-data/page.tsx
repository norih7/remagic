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

const toc = {
  swords: "武器: 剣",
  daggers: "武器: 短剣",
  greatswords: "武器: 大剣",
  spears: "武器: 槍",
  axes: "武器: 斧",
  halberds: "武器: ハルバート",
  knuckles: "武器: ナックル",
  whistles: "武器: ホイッスル",
  staves: "武器: 杖",
  maces: "武器: メイス",
  bags: "武器: バッグ",
  guns: "武器: 銃",
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
    <Main title={title}>
      <article>
        <Section>
          <PageSummary>
          エターニアの武器アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載しています。
          </PageSummary>

          <ToC list={toc} />
        </Section>


        <Section>
          <div className="mb-8">
            <SectionTitle id="swords">{toc["swords"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.sword} />
          </div>
        </Section>

        <Section>
          <div className="mb-8">
            <SectionTitle id="daggers">{toc["daggers"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.shortSword} />
          </div>
          <div className="mb-8">
            <SectionTitle id="greatswords">{toc["greatswords"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.greatSword} />
          </div>
          <div className="mb-8">
            <SectionTitle id="spears">{toc["spears"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.spear} />
          </div>
          <div className="mb-8">
            <SectionTitle id="axes">{toc["axes"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.ax} />
          </div>
          <div className="mb-8">
            <SectionTitle id="halberds">{toc["halberds"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.halbert} />
          </div>
          <div className="mb-8">
            <SectionTitle id="knuckles">{toc["knuckles"]}</SectionTitle>
            <p>装備可能: ファラ</p>
            <ItemList data={filterData.knuckle} />
          </div>
          <div className="mb-8">
            <SectionTitle id="whistles">{toc["whistles"]}</SectionTitle>
            <p>装備可能: メルディ</p>
            <ItemList data={filterData.whistle} />
          </div>
          <div className="mb-8">
            <SectionTitle id="staves">{toc["staves"]}</SectionTitle>
            <p>装備可能: キール</p>
            <ItemList data={filterData.cane} />
          </div>
          <div className="mb-8">
            <SectionTitle id="maces">{toc["maces"]}</SectionTitle>
            <p>装備可能: キール</p>
            <ItemList data={filterData.mace} />
          </div>
          <div className="mb-8">
            <SectionTitle id="bags">{toc["bags"]}</SectionTitle>
            <p>装備可能: チャット</p>
            <ItemList data={filterData.bag} />
          </div>
          <div className="mb-8">
            <SectionTitle id="guns">{toc["guns"]}</SectionTitle>
            <p>装備可能: フォッグ</p>
            <ItemList data={filterData.gun} />
          </div>
        </Section>
      </article>
    </Main>
  );
}
