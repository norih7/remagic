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
          料理とマスター料理について解説！各種料理の習得条件や必要食材を一覧で掲載し、マスター料理の紹介もしています。マスター料理はメリットしかないためぜひ習得を目指してください。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <SectionTitle>マスター料理</SectionTitle>
        <p>
          ワンダーシェフから習得するレシピの熟練度を複数MAXするとマスター料理を習得できます。マスター料理はワンダーシェフを見つけるのではなく、料理実行後に「新しい料理をマスターしました」とアナウンスされ習得します。
        </p>
        <p>
          マスター料理にはHP、TPを増加させるなどの特殊な効果を持つものがあるので是非習得しておきましょう。マスター料理は1人のキャラクターが特定の料理の熟練度をMAXにすることで習得できます。仕組み上はリッド1人で習得することが可能です。また習得したマスター料理は、習得した際のキャラクターだけではなくパーティ全員が実行可能です。詳細情報はこのページの一覧情報をチェック！
        </p>
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
        <SectionTitle>料理一覧データ</SectionTitle>
        <div className="mb-4">
          <p>
            ワンダーシェフから教えてもらえる料理からマスター料理も含めた全料理データを掲載しています。
          </p>
        </div>
        <RecipePropertyList
          recipes={recipes}
          recipeItems={recipeItems}
          locationRecipes={locationRecipes}
        />
      </section>
    </article>
  );
}
