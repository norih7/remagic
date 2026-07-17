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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "料理レシピ一覧とマスター料理";
export const metadata = {
  title,
  description:
    "エターニアの料理レシピ一覧データを掲載しています。料理に必要なアイテムの入手場所も詳しく紹介！マスター料理の解説もしています。",
};
export default async function HomePage() {
  const recipes = await getRecipesData();
  const recipeItems = await getRecipeItemsData();
  const locationRecipes = await getLocationRecipesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          料理一覧データを掲載しています。各料理の習得条件や必要食材をすべて掲載し、マスター料理の解説もしています。マスター料理はメリットしかないためぜひ習得を目指してください。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <SectionTitle>料理一覧データ</SectionTitle>
        <p>
          ワンダーシェフから教えてもらえる料理とマスター料理も含めた全料理データを掲載！
        </p>
        <RecipePropertyList
          recipes={recipes}
          recipeItems={recipeItems}
          locationRecipes={locationRecipes}
        />
      </section>
    </article>
  );
}
