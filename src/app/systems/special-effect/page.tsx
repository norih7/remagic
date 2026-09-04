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
        <p>
          装備すると特殊効果がある装備品を紹介します。一部の装備品には隠し効果で強力なアクセサリと同じ効果を得ることができるものがあります。
          例えば防具であればアクセサリの2枠を消費しないため非常に強力な効果となります。
        </p>
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>TP減少</SectionTitle>
        <p>装備すると術技の消費TPを「2/3」または「1/2」にする装備品です</p>
        <RoundedContainer>
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-70.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>エメラルドリング</h4>
              <div className="flex items-center">
                <Tag>アクセサリ</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={4} />
                </RoundedInlineList>
              </div>
            </div>
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
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-297.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>フェアリィリング</h4>
              <div className="flex items-center">
                <Tag>アクセサリ</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={5} />
                </RoundedInlineList>
              </div>
            </div>
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
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-264.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>ムーンローブ</h4>
              <div className="flex items-center">
                <Tag>防具</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={5} />
                </RoundedInlineList>
              </div>
            </div>
          </div>
          <RoundedItem title="説明" className="mb-3">
            装備キャラクターの消費TPが2/3となる防具。ゲーム内で1つだけ入手可能。キールとフォッグが装備でき、アクセサリではないため非常に優秀な防具です。
          </RoundedItem>
          <RoundedItem title="入手方法" className="mb-3">
            <ul className="mb-2">
              <li>アイフリードの墓の宝箱から入手</li>
            </ul>
            <GuideList
              items={[
                {
                  title: "アイフリードの墓の解説",
                  href: "/extras/aifread",
                },
              ]}
            ></GuideList>
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section>
        <SectionTitle>HP自動回復</SectionTitle>
        <p>
          これらの装備品はすべて「戦闘中8秒ごとにHPが5%回復する」効果があります
        </p>
        <RoundedContainer>
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-68.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>アンクシールド</h4>
              <div className="flex items-center">
                <Tag>防具</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={4} />
                </RoundedInlineList>
              </div>
            </div>
          </div>
          <RoundedItem title="説明" className="mb-3">
            リッドが装備可能な盾。ゲーム内で1つだけ入手可能。ストーリーの中盤前に入手可能な盾なので使い勝手が良いです。後半になる他に強力な盾も出てきて活躍の場は減りますが、場合によってはHP自動回復のためにアンクシールドを装備する戦略はアリです。
          </RoundedItem>
          <RoundedItem title="入手方法" className="mb-3">
            <ul>
              <li>霊峰ファロースの宝箱から入手</li>
            </ul>
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-298.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>ホーリィシンボル</h4>
              <div className="flex items-center">
                <Tag>アクセサリ</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={3} />
                </RoundedInlineList>
              </div>
            </div>
          </div>
          <div className="mb-3"></div>
          <RoundedItem title="説明" className="mb-3">
            雷晶霊の遺跡で「ヴォルト」を倒すと入手できるアイテム。ゲーム内で最大2つ入手可能。風晶霊の空洞で入手できる「メンタルリング」にルーンボトルを使うと変化させることもでき、最短でシルフ契約前に入手できます。
          </RoundedItem>
          <RoundedItem title="入手方法" className="mb-3">
            <ul>
              <li>雷晶霊の遺跡で「ヴォルト」を倒すと入手</li>
            </ul>
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-240.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>ホーリィクローク</h4>
              <div className="flex items-center">
                <Tag>防具</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={5} />
                </RoundedInlineList>
              </div>
            </div>
          </div>
          <RoundedItem title="説明" className="mb-3">
            女性キャラクタ（ファラ、メルディ、チャット）が装備可能な防具。ゲーム内で1つだけ入手可能。防御力も高く、簡単に入手できるのでインフェリア帰還後に早めに入手するのがおすすめです。
          </RoundedItem>
          <RoundedItem title="入手方法" className="mb-3">
            <ul className="mb-2">
              <li>インフェリアの隠しアジト1の宝箱から入手</li>
            </ul>
            <GuideList
              items={[
                {
                  title: "インフェリアの隠しアジト",
                  href: "/subevents/secret-base",
                },
              ]}
            ></GuideList>
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                src="/icons/item-253.jpg"
                width={50}
                height={50}
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <h4>キューティミトン</h4>
              <div className="flex items-center">
                <Tag>防具</Tag>
                <RoundedInlineList title="オススメ度">
                  <StarRating rating={5} />
                </RoundedInlineList>
              </div>
            </div>
          </div>
          <RoundedItem title="説明" className="mb-3">
            女性キャラクタ（ファラ、メルディ、チャット）が装備可能な防具。ゲーム内で1つだけ入手可能。沈没船の難易度は低いためこちらもインフェリア帰還後早めに入手するのがおすすめです。
          </RoundedItem>
          <RoundedItem title="入手方法" className="mb-3">
            <ul className="mb-2">
              <li>沈没船の宝箱から入手</li>
            </ul>
            <GuideList
              items={[
                {
                  title: "沈没船の解説",
                  href: "/extras/sunken-ship",
                },
              ]}
            ></GuideList>
          </RoundedItem>
        </RoundedContainer>
      </section>
    </article>
  );
}
