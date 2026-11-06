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

const toc = {
  armor: "防具: 鎧",
  shields: "防具: 盾",
  helmets: "防具: 兜",
  cloaks: "防具: クローク",
  robes: "防具: ローブ",
  ribbons: "防具: リボン",
  bracelets: "防具: ブレスレット",
  circlets: "防具: サークレット",
  hats: "防具: 帽子",
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
    <Main title={title}>
      <article>
        <Section>
          <PageSummary>
            エターニアの防具アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載しています。
          </PageSummary>

          <ToC list={toc} />
        </Section>


        <Section>
          <div className="mb-8">
            <SectionTitle id="armor">{toc["armor"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.armor} />
          </div>
        </Section>

        <Section>
          <div className="mb-8">
            <SectionTitle id="shields">{toc["shields"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.shield} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="helmets">{toc["helmets"]}</SectionTitle>
            <p>装備可能: リッド</p>
            <ItemList data={filterData.helmet} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="cloaks">{toc["cloaks"]}</SectionTitle>
            <p>装備可能: ファラ、メルディ、チャット</p>
            <ItemList data={filterData.cloak} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="robes">{toc["robes"]}</SectionTitle>
            <p>装備可能: キール、フォッグ</p>
            <ItemList data={filterData.robe} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="ribbons">{toc["ribbons"]}</SectionTitle>
            <p>装備可能: ファラ、メルディ</p>
            <ItemList data={filterData.ribbon} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="bracelets">{toc["bracelets"]}</SectionTitle>
            <p>装備可能: ファラ、メルディ、チャット、フォッグ</p>
            <ItemList data={filterData.bracelet} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="circlets">{toc["circlets"]}</SectionTitle>
            <p>装備可能: キール ※「クレスのバンダナ」のみリッドが装備可能</p>
            <ItemList data={filterData.circlet} />
          </div>
        </Section>
        <Section>
          <div className="mb-8">
            <SectionTitle id="hats">{toc["hats"]}</SectionTitle>
            <p>装備可能: チャット</p>
            <ItemList data={filterData.hat} />
          </div>
        </Section>
      </article>
    </Main>
  );
}
