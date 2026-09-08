import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import {
  getRecipesData,
  getRecipeItemsData,
  getLocationRecipesData,
} from "@/lib/db";
import RecipePropertyList from "@/components/RecipePropertyList";
import Image from "next/image";
import { systemLinks } from "@/constants";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "master-recipe";
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
  const recipes = await getRecipesData();
  const masterRecipes = recipes.filter((item) => item.type === "master");
  const recipeItems = await getRecipeItemsData();
  const locationRecipes = await getLocationRecipesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>マスター料理の説明と習得方法を解説します。</p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <SectionTitle>マスター料理とは</SectionTitle>
        <p>
          エターニアには料理を発展させた「マスター料理」が存在します。
          マスター料理は回復効果量が多いだけでなく、パーティのHP/TPが1する増加など強力な特殊効果を持っているため、積極的に習得しておきましょう。
        </p>
        <p>
          習得条件は「特定のキャラクターの熟練度をMAXにすること」ですが、一度習得すればパーティメンバー全員がその料理を作れるようになります。
          特定の複数の料理で熟練度をMAXにすると、料理実行時に「新しい料理をマスターしました」とアナウンスされ、マスター料理を習得します。
        </p>
        <p></p>
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src="/systems/recipe-master-recipe.jpg"
            alt=""
            width={300}
            height={200}
            className="mr-1"
          />
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>特殊な食材「パープルソディ」</SectionTitle>
        <p>
          マスター料理で利用する共通食材として「パープルソディ」があります。セレスティアで入手可能な食材ですが町などで入手できず「ノームの集落」と「ねこにんの里」の2箇所で入手できます。
        </p>
        <h3>ノームの里</h3>
        <h3>ねこにんの里</h3>
      </section>
      <section className="mb-12">
        <SectionTitle>おすすめマスター料理</SectionTitle>
        <h3>マーボーカレー</h3>
        <p>
          なんといってもパーティ全員のTPを+1してくれる特殊効果が魅力的。+1は効果量は少なく見えますが、6人パーティで実行すればTP+6の効果があると言えるので強力です。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>マスター料理一覧データ</SectionTitle>
        <RecipePropertyList
          recipes={masterRecipes}
          recipeItems={recipeItems}
          locationRecipes={locationRecipes}
        />
      </section>
    </article>
  );
}
