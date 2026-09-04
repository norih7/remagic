import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import RoundedInlineList from "@/components/RoundedInlineList";
import ResponsiveImage from "@/components/ResponsiveImage";
import Tag from "@/components/Tag";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import GuideList from "@/components/GuideList";
import { systemLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "special-effect";
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
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>装備すると特殊効果がある装備品を紹介します。</p>
      </PageSummary>
      <section>
        <SectionTitle>TP減少</SectionTitle>
        <RoundedContainer>
          <div className="mb-3">
            <h3>エメラルドリング</h3>
            <div className="flex items-center">
              <Tag>アクセサリ</Tag>
              <RoundedInlineList title="オススメ度">
                <StarRating rating={4} />
              </RoundedInlineList>
            </div>
          </div>
          <div className="mb-3">
            <Image
              src="/systems/special-effect-emerald-ring.jpg"
              width={360}
              height={60}
              alt=""
            />
          </div>
          <RoundedItem title="説明" className="mb-3">
            装備キャラクターの消費TPが2/3となる指輪。ゲーム内で2つのみ入手可能。ダンジョン内の宝箱にあり、早くはファロース霊峰にて入手できる。
          </RoundedItem>
          <RoundedItem title="入手方法">
            <ul>
              <li>ファロース霊峰の宝箱から入手</li>
              <li>チャットの小屋にある宝箱から入手</li>
            </ul>
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <div className="mb-3">
            <h3>フェアリィリング</h3>
            <div className="flex items-center">
              <Tag>アクセサリ</Tag>
              <RoundedInlineList title="オススメ度">
                <StarRating rating={5} />
              </RoundedInlineList>
            </div>
          </div>
          <div className="mb-3">
            <Image
              src="/systems/special-effect-fairy-ring.jpg"
              width={360}
              height={60}
              alt=""
            />
          </div>
          <RoundedItem title="説明" className="mb-3">
            装備キャラクターの消費TPが1/2となる指輪。ゲーム内で最大3つ入手可能。入手できるのはストーリーの後半となり、通常入手可能な2つはボスを倒すことで入手できる。ボス「スパイラル」はストーリー上で必ず倒すボスなのでフェアリィリングは最低1個は獲得する。
          </RoundedItem>
          <RoundedItem title="入手方法">
            <ul>
              <li>バリル城にてボス「スパイラル」を倒す</li>
              <li>セイファート神殿地下にてボス「マクスウェル」を倒す</li>
              <li>ミスティシンボルにルーンボトルを使って変化させる</li>
            </ul>
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <div className="mb-3">
            <h3>ムーンローブ</h3>
            <div className="flex items-center">
              <Tag>防具</Tag>
              <RoundedInlineList title="オススメ度">
                <StarRating rating={5} />
              </RoundedInlineList>
            </div>
          </div>
          <div className="mb-3">
            <Image
              src="/systems/special-effect-moon-robe.jpg"
              width={360}
              height={60}
              alt=""
            />
          </div>
          <RoundedItem title="説明" className="mb-3">
            装備キャラクターの消費TPが2/3となる防具。ゲーム内で1つだけ入手可能。キールとフォッグが装備でき、アクセサリではないため非常に優秀な防具です。
          </RoundedItem>
          <RoundedItem title="入手方法" className="mb-3">
            <ul>
              <li>アイフリードの墓の宝箱から入手</li>
            </ul>
          </RoundedItem>
          <GuideList
            items={[
              {
                title: "アイフリードの墓の解説",
                href: "/extras/aifread",
              },
            ]}
          ></GuideList>
        </RoundedContainer>
      </section>
      <section>
        <SectionTitle>自動回復</SectionTitle>
      </section>
    </article>
  );
}
