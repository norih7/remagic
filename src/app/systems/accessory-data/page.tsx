import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import { systemLinks } from "@/constants";
import { getItemsData } from "@/lib/db";
import ItemList from "@/components/ItemList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "accessory-data";
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
  const filterData = itemsData.filter((item) => item.type === "accessory");

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          エターニアのアクセサリ一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載していますのでぜひご確認ください。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <SectionTitle>アクセサリ一覧データ</SectionTitle>
        <ItemList data={filterData} />
      </section>
    </article>
  );
}
