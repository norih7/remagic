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
import Main from "@/components/SiteLayout/Main";
import Summary from "@/components/Summary";
import ToC from "@/components/ToC";
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

const toc = {
  "battle-rules": "クレス&アーチェ戦の仕様",
  "equipment-and-preparation": "装備品と準備",
  "battle-tips": "戦闘のコツ",
  "battle-strategy": "攻略法",
};

export default async function HomePage() {
  return (
    <Main title={title}>
      <article>
        <Section>
          <ResponsiveImage src="/deeps/cless-and-arche-digest.jpg" />
          <PageSummary>
            闘技場の世界一決定戦で優勝すると乱入してくる謎の剣士「クレス」との戦いを解説します。戦闘ランクハード以上で戦闘に追加される「アーチェ」についての攻略法も。
            エターニアでも屈指の強敵ですがリッドの最強武器「エターナルソード」の入手や、アクセサリ「クレスのバンダナ」「アーチェのリボン」なども入手できるためぜひ挑戦しましょう。
          </PageSummary>

          <Summary
            list={[
              {
                label: "目的",
                value: "最強クラスのボス討伐、エターナルソードなどの入手",
              },
              {
                label: "発生",
                value: "王都インフェリア到着後 ※ストーリー最終盤推奨",
              },
            ]}
          />
          <div className="mb-4"></div>

          <ToC list={toc} />
        </Section>

        <Section>
          <SectionTitle id="battle-rules">{toc["battle-rules"]}</SectionTitle>
          <div className="mb-8">
            <h3>報酬</h3>
            <CardList
              list={[
                <>
                  <h4>エターナルソード</h4>
                  リッドの最強武器。「斬り+890、突き+850」の性能を持つ剣。
                  <br />
                  攻撃ヒット時、稀に敵の詠唱時間を2倍にする効果も。
                </>,
                <>
                  <h4>クレスのバンダナ</h4>
                  リッドが装備可能な頭防具。「回避+20、命中+10、時耐性+20%」の性能。
                </>,
                <>
                  <h4>アーチェのリボン ※ハード以上でクリア</h4>
                  ファラとメルディが装備可能な頭防具。「幸運+30
                  火風水土耐性+10%」の性能。
                </>,
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>戦闘ランクによる戦闘の違い</h3>
            <RoundedContainer>
              <div className="grid grid-cols-2 gap-3">
                <RoundedItem title="ノーマル" white={true} large={true}>
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
                <RoundedItem title="ハード" white={true} large={true}>
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
                <RoundedItem title="マニア" white={true} large={true}>
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
                <RoundedItem title="アンノウン" white={true} large={true}>
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

          <div className="mb-8">
            <h3>リマスター版</h3>
            <p>クレス&アーチェを倒しても何度も挑戦可能。</p>
            <p>
              まずはノーマルでクリアしてエターナルソードを入手してからハード以上に挑むことが可能。特にエターナルソードはアーチェの詠唱時間を遅延させる効果も期待できるためこちらのルートを推奨。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle id="equipment-and-preparation">
            {toc["equipment-and-preparation"]}
          </SectionTitle>
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
                    {
                      title: "ステータスアップ薬草集めはこちら",
                      href: "/deeps/herb",
                    },
                  ]}
                />
              </div>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle id="battle-tips">{toc["battle-tips"]}</SectionTitle>
          <div className="mb-8">
            <RoundedContainer title="ガードテクニック">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem title="鳳凰天駆のガードと立ち回り">
                  <p>
                    鳳凰天駆はガードしましょう。HIT数が多いため全てをガードできないケースがありますが基本は鳳凰天駆を発動されたらガードすること推奨します。ガードに成功するとクレスに隙ができているため攻撃を繰り出しましょう。またマニア以上のクレスが発動する「緋凰絶炎衝」も鳳凰天駆をガードできれば発動を防止できます。
                  </p>
                  <GifPlayer
                    src="/deeps/cless-guard1.gif"
                    alt="クレスの魔神剣防御"
                  />
                </RoundedItem>
                <RoundedItem title="連続魔神剣の防御">
                  <p>
                    ガードし続けるではなく魔神剣を1つずつガードする。ガードは初回の攻撃に対して強固という仕様があるため毎回防御ボタンを押しましょう。基本的には烈空斬による回避がおすすめですが、アーチェ戦では間合い的に魔神剣をガードしてすぐに鳳凰天駆を使うケースがあります。
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

                <RoundedItem title="アーチェの魔術回避">
                  <div className="mb-3">下記の術はなるべく回避したい</div>
                  <DescriptionList
                    list={[
                      {
                        label: "インディグネイション",
                        value:
                          "大ダメージを受けるため空中烈空斬やダッシュで回避",
                      },
                      {
                        label: "レイ、スパークウェーブ",
                        value: "空中烈空斬で回避",
                      },
                    ]}
                  />
                </RoundedItem>
              </div>
            </RoundedContainer>
            <RoundedContainer title="戦闘不能前にリバースドールを装備">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem>
                  戦闘不能前になると思ったらメニュー画面を開き、リバースドールを装備させましょう。何度も使えるためどうしてもクレスやアーチェに勝てない場合に有効です。
                </RoundedItem>
              </div>
            </RoundedContainer>

            <RoundedContainer title="最後の極光剣">
              <div className="grid grid-cols-1 gap-3 pt-3">
                <RoundedItem>
                  <p>
                    クレスのHPが1500近くになり、リッドのHPが少なくなった場合には「極光剣」が有効です。「□+×+⚪︎」で極光壁を出して「⚪︎」ボタンを連打することで極光剣を発動させることができます。
                  </p>
                  <GifPlayer src="/deeps/cless-aurora-sword.gif" alt="" />
                </RoundedItem>
              </div>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle id="battle-strategy">
            {toc["battle-strategy"]}
          </SectionTitle>
          <div className="mb-8">
            <div className="mb-3">
              <h3>デリスエンブレムがない場合: 空破絶掌撃</h3>
              <div>
                <Tag>簡単攻略法</Tag>
                <Tag>ノーマルおすすめ</Tag>
              </div>
            </div>
            <p>
              シンプルに通常攻撃と「空破絶掌撃」をベースに攻撃していく戦法です。空破絶掌撃は命中率が高いためデリスエンブレムなしでもクレスのガードを崩しやすいです。クレスの鳳凰天駆をガードしたあとの隙にも通常攻撃→空破絶掌撃の連携を徹底していきます。
            </p>
            <p>
              クレスのHPが50%以下になると使ってくる「次元斬」は正面から近づくと攻撃を受けてしまうため、ダッシュすり抜けや空中烈空斬で次元斬を使ったクレスの背後をとって攻撃→空破絶掌撃の連携をとっていきましょう。
            </p>
            <GifPlayer src="/deeps/cless-thrust.gif" alt="空破絶掌撃ベース" />
          </div>

          <div className="mb-8">
            <div className="mb-3">
              <h3>緋凰絶炎衝の連発</h3>
              <div>
                <Tag>ハードおすすめ</Tag>
              </div>
            </div>
            <p>
              ハードでおすすめなのが「緋凰絶炎衝」を連発していく戦法。アーチェは攻撃による崩しが容易なため、鳳凰天駆をヒットさせて「緋凰絶炎衝」を繰り出しましょう。画面端に2人を寄せるハメでこのように緋凰絶炎衝を連発するとアーチェのHPを一気に削ることができます。
            </p>
            <GifPlayer
              src="/deeps/cless-arche-phoenix.gif"
              alt="緋凰絶炎衝連発"
            />
          </div>
        </Section>
      </article>
    </Main>
  );
}
