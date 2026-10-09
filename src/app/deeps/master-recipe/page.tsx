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
import { deepLinks } from "@/constants";
import Information from "@/components/Information";
import ResponsiveImage from "@/components/ResponsiveImage";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import GuideList from "@/components/GuideList";
import RoundedContainer from "@/components/RoundedContainer";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "master-recipe";
const title = deepLinks[pageKey].title;
const description = deepLinks[pageKey].seoDesc;
const canonical = deepLinks[pageKey].path;
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
    <Main title={title}>
      <article>
<PageSummary>
        <p>マスター料理の説明と習得方法を解説します。</p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <Section>
        <SectionTitle>マスター料理とは</SectionTitle>
        <div className="mb-4">
          <p>
            エターニアには料理を発展させた「マスター料理」が存在します。
            マスター料理は回復効果量が多いだけでなく、パーティのHP/TPが増加など強力な特殊効果を持っているため、積極的に習得していくことを推奨します。
          </p>
        </div>

        <h3>マスター料理の習得方法</h3>
        <ResponsiveImage src="/systems/master-recipe-get.jpg" />
        <p>
          マスター料理は「1人のキャラクターがベースとなる料理の熟練度をすべてMAXにすること」で習得します。一度習得すればパーティメンバー全員がその料理を作れるようになります。
          料理を実行して条件を満たすと「新しい料理をマスターしました」とアナウンスされ、マスター料理を習得します。
        </p>
      </Section>
      <Section>
        <SectionTitle>特殊な食材「パープルソディ」</SectionTitle>
        <div className="mb-8">
          <p>
            マスター料理では食材の1つとして「パープルソディ」が使われます。パープルソディはセレスティアで入手可能な食材で、町などで入手できず「ノームの集落」と「ねこにんの里」の2箇所でのみ入手できます。
          </p>
        </div>
        <div className="mb-8">
          <div className="mb-3">
            <h3>購入場所1: ノームの集落</h3>
            <Tag>おすすめです</Tag>
          </div>
          <div className="mb-4">
            <ResponsiveImage src="/deeps/master-recipe-mine-shop.jpg" />
            <p>
              「地晶霊の廃坑」にあるノームの里にいる小さいノームの食材屋でパープルソディを購入できます。チャットの小屋側のフィールドマップから地晶霊の廃坑に入り、下記マップのように進めばすぐノームの集落へ辿り着きます。ここでは一度に15個まとめ買いでき、飛行艇がなくても簡単に訪問できるためパープルソディの購入場所としておすすめです。
            </p>
          </div>
          <h4>ノームの集落への行き方</h4>
          <ResponsiveImage src="/deeps/master-recipe-mine.jpg" />
          <ResponsiveImage src="/maps/mine-gnome-map.jpg" />
        </div>
        <div className="mb-8">
          <h3>購入場所2: ねこにんの里</h3>
          <ResponsiveImage src="/extras/secret-town-nekonin-purple.jpg" />
          <p>
            ねこにんの里の入り口にいるねこにんからパープルソディを購入できます。ただし1個ずつ購入することしかできません。
          </p>
          <GuideList
            items={[{ title: "ねこにんの里", href: "/extras/towns" }]}
          />
        </div>
      </Section>
      <Section>
        <SectionTitle>おすすめマスター料理</SectionTitle>
        <RoundedContainer>
          <h3>マーボーカレー</h3>
          <ResponsiveImage src="/systems/master-recipe-mabo-curry.jpg" />
          <p>
            なんといってもパーティ全員のTPを+1してくれる特殊効果が魅力的。効果量は少なく見えますが、パーティ全員に効果があるため強力です。
          </p>
        </RoundedContainer>
      </Section>
      <Section>
        <SectionTitle>マスター料理一覧データ</SectionTitle>
        <RecipePropertyList
          recipes={masterRecipes}
          recipeItems={recipeItems}
          locationRecipes={locationRecipes}
        />
      </Section>
    </article>
    </Main>
  );
}
