import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import Section from "@/components/Section";
import CardList from "@/components/CardLIst";
import ResponsiveImage from "@/components/ResponsiveImage";
import GifPlayer from "@/components/GifPlayer";
import Image from "next/image";
import Main from "@/components/SiteLayout/Main";
import Expand from "@/components/Expand";
import InlineCaption from "@/components/InlineCaption";
import {
  SwitchY,
  SwitchLeft,
  SwitchB,
  SwitchA,
  SwitchX,
} from "@/components/Buttons/Switch";
import {
  PSLeft,
  PSSquare,
  PSCross,
  PSCircle,
  PSTriange,
} from "@/components/Buttons/Playstation";
import Title from "@/components/Title";
import RoundedInlineList from "@/components/RoundedInlineList";
import LocationItems from "@/components/LocationItems";
import DescriptionList from "@/components/DescriptionList";

export const dynamic = "force-static";

const pageKey = "cless-and-arche";
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

const data = [
  {
    itemId: 305,
    itemName: "武器: ラストフェンサー",
    remarks: "物理武器 副次効果もあり基本はこれ",
    locationId: 0,
    itemType: "",
  },
  {
    itemId: 276,
    itemName: "体: ゴールドアーマー",
    remarks: "水風火光ダメージを30%軽減",
    locationId: 0,
    itemType: "",
  },
  {
    itemId: 124,
    itemName: "体: マム・ベイン",
    remarks: "地雷氷闇ダメージを20%軽減",
    locationId: 0,
    itemType: "",
  },
  {
    itemId: 68,
    itemName: "盾: アンクシールド",
    remarks: "特殊効果で8秒ごとにHPを5%回復",
    locationId: 0,
    itemType: "",
  },
  {
    itemId: 297,
    itemName: "装備: フェアリィリング",
    remarks: "消費TPを1/2",
    locationId: 0,
    itemType: "",
  },
  {
    itemId: 353,
    itemName: "装備: デリスエンブレム",
    remarks: "攻撃を必中にする（初回HITのみ）",
    locationId: 0,
    itemType: "",
  },
];

export default async function HomePage() {
  return (
    <Main title={title}>
      <article>
        <Section>
          <Title>{title}</Title>
          <ResponsiveImage src="/deeps/cless-and-arche-digest.jpg" />

          <div className="mb-4 grid grid-cols-1 gap-2">
            <RoundedInlineList title="目的">
              最強クラスのボス討伐、エターナルソードなどの入手
            </RoundedInlineList>
            <RoundedInlineList title="発生">
              王都インフェリア到着後 ※ストーリー最終盤推奨
            </RoundedInlineList>
          </div>
          <div className="mb-8">
            <p>
              闘技場の世界一決定戦で優勝すると乱入してくる謎の剣士「クレス」との戦いを解説します。戦闘ランクハード以上で戦闘に追加される「アーチェ」についての攻略法も。
            </p>
            <p>
              エターニアでも屈指の強敵ですがリッドの最強武器「エターナルソード」の入手や、アクセサリ「クレスのバンダナ」「アーチェのリボン」なども入手できるためぜひ挑戦しましょう。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>クレス&アーチェ戦の仕様</SectionTitle>
          <div className="mb-8">
            <h3>報酬</h3>
            <CardList
              list={[
                "エターナルソード",
                "クレスのバンダナ",
                "アーチェのリボン ※ハード以上でクリア",
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>戦闘ランクによる戦闘の違い</h3>
            <RoundedContainer>
              <div className="grid grid-cols-2 gap-3">
                <RoundedItem title="ノーマル" white={true}>
                  <DescriptionList
                    list={[
                      { label: "HP", value: "クレス: 9999" },
                      {
                        label: "戦闘内容",
                        value:
                          "緋凰絶炎衝の発動なし。HPが50%以下で次元斬、25%以下で冥空斬翔剣を発動。",
                      },
                    ]}
                  />
                </RoundedItem>
                <RoundedItem title="ハード" white={true}>
                  <DescriptionList
                    list={[
                      {
                        label: "HP",
                        value: (
                          <>
                            クレス: 11998
                            <br />
                            アーチェ: 7200
                          </>
                        ),
                      },

                      {
                        label: "戦闘変化",
                        value:
                          "敵にアーチェが追加。クレスの行動パターンは同じで攻撃力がアップ。",
                      },
                    ]}
                  />
                </RoundedItem>
                <RoundedItem title="マニア" white={true}>
                  <DescriptionList
                    list={[
                      {
                        label: "HP",
                        value: (
                          <>
                            クレス: 14998
                            <br />
                            アーチェ:9000
                          </>
                        ),
                      },

                      {
                        label: "戦闘変化",
                        value: "クレスが秘奥義「緋凰絶炎衝」を発動",
                      },
                    ]}
                  />
                </RoundedItem>
                <RoundedItem title="アンノウン" white={true}>
                  <DescriptionList
                    list={[
                      {
                        label: "HP",
                        value: (
                          <>
                            クレス: 17998
                            <br />
                            アーチェ:10800
                          </>
                        ),
                      },
                    ]}
                  />
                </RoundedItem>
              </div>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle>装備品と準備</SectionTitle>
          <div className="mb-8">
            <h3>装備品</h3>
            <p>
              クレスの鳳凰天駆、アーチェの魔術に耐性がある装備を準備しておきましょう。
            </p>
            <LocationItems
              data={data}
              locationIds={[]}
              title="おすすめ装備品"
            />
          </div>
          <div className="mb-8">
            <h3>その他準備</h3>
            <RoundedContainer title="薬草でHP/TPを上げる">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem>
                  闘技場は戦闘中の回復ができないためHPとTPをなるべくMAXにしておくことを推奨します。足りない場合はリッドにセージやセボリーを使ってMAX状態にしましょう。
                </RoundedItem>
                <GuideList
                  items={[
                    { title: "ステータスアップ薬草集め", href: "/deeps/herb" },
                  ]}
                />
              </div>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle>戦闘のコツ</SectionTitle>
          <div className="mb-8">
            <RoundedContainer title="ガードテクニック">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem title="鳳凰天駆のガードと立ち回り">
                  <p>
                    鳳凰天駆はガードし、その後の隙を攻撃するようにしましょう。HIT数が多いため全てをガードできないケースがありますが基本は鳳凰天駆を発動されたらガードしていきます。ガード成功するとクレスに隙ができているため攻撃を繰り出しましょう。
                  </p>{" "}
                  <GifPlayer
                    src="/deeps/cless-guard1.gif"
                    alt="クレスの魔神剣防御"
                  />
                </RoundedItem>
                <RoundedItem title="連続魔神剣の防御">
                  <p>
                    ガードし続けるではなく魔神剣を1つずつガードする。ガードは初回の攻撃に対して強固という仕様があるため毎回防御ボタンを押しましょう。ただし基本的には後述する烈空斬による回避がおすすめです。
                  </p>
                  <GifPlayer
                    src="/deeps/cless-guard2.gif"
                    alt="クレスの魔神剣防御"
                  />
                </RoundedItem>
              </div>
            </RoundedContainer>
            <RoundedContainer title="裂空斬/真空裂斬を使いこなす">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem title="クレスの魔神剣回避">
                  <p>
                    <strong>
                      烈空斬/真空烈斬は100回以上使うと空中で発動できます。
                    </strong>
                    これを利用してクレスの連続魔神剣などを簡単に回避できます。着地後すぐに魔神剣が飛んでくる可能性があるため着地後のガードも忘れずに。TPが制限される闘技場では消費が少ない烈空斬がおすすめです。
                  </p>
                  <GifPlayer
                    src="/deeps/cless-avoid.gif"
                    alt="クレスの魔神剣回避"
                  />
                </RoundedItem>

                <RoundedItem title="アーチェの魔術回避">-</RoundedItem>
              </div>
            </RoundedContainer>
            <RoundedContainer title="戦闘不能前にリバースドールを装備">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem>
                  戦闘不能前になると思ったらメニュー画面を開き、リバースドールを装備させましょう。何度も使えるためどうしてもクレスやアーチェに勝てない場合に有効です。
                </RoundedItem>
              </div>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle>攻略法</SectionTitle>
          <div className="mb-3">
            <h3>デリスエンブレムがない場合</h3>
            <div>
              <Tag>初心者おすすめ</Tag>
              <Tag>ノーマルおすすめ</Tag>
            </div>
          </div>
          <p>
            シンプルに通常攻撃と「空破絶掌撃」をベースに攻撃していく戦法です。空破絶掌撃は命中率が高いためデリスエンブレムなしでもクレスのガードを崩しやすいです。
          </p>
        </Section>
      </article>
    </Main>
  );
}
