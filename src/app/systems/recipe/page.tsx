import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Main from "@/components/SiteLayout/Main";
import {
  getRecipesData,
  getRecipeItemsData,
  getLocationRecipesData,
} from "@/lib/db";
import RecipePropertyList from "@/components/RecipePropertyList";
import Image from "next/image";
import { systemLinks } from "@/constants";
import Section from "@/components/Section";
import GuideList from "@/components/GuideList";
import Title from "@/components/Title";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "recipe";
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
  const recipeItems = await getRecipeItemsData();
  const locationRecipes = await getLocationRecipesData();

  return (
    <Main title={title}>
      <article>
        <Section>
          <Title>料理一覧データ</Title>
          <div className="mb-6">
            料理一覧データを掲載しています。ワンダーシェフの場所を画像付きで案内し、必要な食材の購入情報などもすべて掲載しています。
          </div>
          <div className="mb-8">
            <GuideList
              items={[
                {
                  title: "マスター料理の詳細はこちら",
                  href: "/deeps/master-recipe",
                },
              ]}
            />
          </div>
          <RecipePropertyList
            recipes={recipes}
            recipeItems={recipeItems}
            locationRecipes={locationRecipes}
          />
        </Section>
      </article>
    </Main>
  );
}
