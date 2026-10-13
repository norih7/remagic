import { createMetaTitle } from "@/utils";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";
import SectionTitle from "@/components/SectionTitle";
import { Skill } from "@/components/MagicPropertyList";
import MagicPropertyList from "@/components/MagicPropertyList";
import { skillLinks, elementMap } from "@/constants";
import Main from "@/components/SiteLayout/Main";
import Section from "@/components/Section";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import PageSummary from "@/components/PageSummary";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "magic";
const title = skillLinks[pageKey].title;
const canonical = skillLinks[pageKey].path;
const description = skillLinks[pageKey].seoDesc;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const skills: Skill[] = [
    {
      name: "アクアエッジ",
      description:
        "キールが初期習得している晶霊術。楕円形の水の塊を相手にぶつける。",
      tp: 4,
      hit: 1,
      element: ["water"],
      type: "攻撃",
      pair: ["a"],
    },
    {
      name: "スプレッド",
      description: "出現した水の柱に当たった敵を浮かせながらダメージを与える。",
      requirement: "ウンディーネLv1",
      tp: 9,
      hit: 3,
      element: ["water"],
      type: "攻撃",
      pair: ["water"],
    },
    {
      name: "ヒール",
      description: "味方一人のHPを50%回復させる。",
      requirement: "ウンディーネLv1",
      requirement2: "シルフLv1",
      tp: 16,
      element: [],
      type: "回復",
      pair: ["water", "wind"],
    },

    {
      name: "アシッドレイン",
      description: "雨が当たった敵に対して与えるダメージが一時的に上昇する。",
      requirement: "ウンディーネLv10",
      requirement2: "ノームLv5",
      tp: 10,
      element: ["water"],
      type: "補助",
      pair: ["water", "earth"],
    },
    {
      name: "ナース",
      description: "味方全員のHPを40%回復させる。",
      requirement: "ウンディーネLv10",
      requirement2: "セルシウスLv1",
      tp: 42,
      element: ["water"],
      type: "回復",
      pair: ["water", "ice"],
    },
    {
      name: "キュア",
      description: "味方一人のHPを90%回復させる。",
      requirement: "ウンディーネLv15",
      requirement2: "マクスウェルLv1",
      tp: 32,
      element: ["water"],
      type: "回復",
      pair: ["water", "origin"],
    },
    {
      name: "リザレクション",
      description:
        "戦闘中は魔法陣の中にいる仲間のHPを最大90%ほど回復。メニュー画面では全員に適用される。",
      requirement: "ウンディーネLv20",
      requirement2: "レムLv1",
      tp: 60,
      element: ["water"],
      type: "回復",
      pair: ["water", "light"],
    },
    {
      name: "レイズデッド",
      description: "戦闘不能の味方を回復し、HPも70%回復させる。",
      requirement: "ウンディーネLv20",
      requirement2: "ゼクンドゥスLv1",
      tp: 90,
      element: ["water"],
      type: "回復",
      pair: ["water", "time"],
    },
    {
      name: "ウインドカッター",
      description: "キールが初期習得している晶霊術。風の刃を左右に敵に当てる。",
      requirement: "キール加入時に習得済み",
      tp: 7,
      element: ["wind"],
      type: "攻撃",
      hit: 2,
      pair: ["none"],
    },
    {
      name: "エアスラスト",
      description:
        "複数の風の刃を敵にぶつけて攻撃する。攻撃範囲にクセがあるが、うまく使えば中盤の敵の詠唱の妨げにも使える。",
      requirement: "シルフLv1",
      tp: 12,
      element: ["wind"],
      type: "攻撃",
      hit: 8,
      pair: ["wind"],
    },
    {
      name: "コンセントレート",
      description:
        "サポート系晶霊術。戦闘中にのみ発動できて、仲間一人の集中力をアップさせる。",
      requirement: "シルフLv6",
      requirement2: "イフリートLv5",
      tp: 6,
      element: ["wind"],
      type: "補助",
      pair: ["wind", "fire"],
    },
    {
      name: "サイクロン",
      description:
        "大きな竜巻を5、6秒ほど発生させて触れた敵にダメージを与える。",
      requirement: "シルフLv20",
      requirement2: "シャドウLv9",
      tp: 44,
      element: ["wind"],
      type: "攻撃",
      hit: 16,
      pair: ["water", "dark"],
    },
    {
      name: "ファイアボール",
      description:
        "キールが初期習得している晶霊術。小さな火玉を3つ順々と敵に当てて攻撃する。",
      requirement: "キール加入時に習得済み",
      tp: 7,
      element: ["fire"],
      type: "攻撃",
      hit: 3,
      pair: ["none"],
    },
    {
      name: "イラプション",
      description:
        "マグマの噴火に当たった敵を3回攻撃し、その後に降ってくる岩石でも攻撃する。範囲はなかなか広いため、敵が固まっている場所に有効。",
      requirement: "イフリートLv1",
      tp: 18,
      element: ["fire"],
      type: "攻撃",
      hit: 7,
      pair: ["fire"],
    },
    {
      name: "シャープネス",
      description:
        "サポート系晶霊術。戦闘中にのみ仲間一人の攻撃力を上昇させる。重ね掛けは無効となる。",
      requirement: "イフリートLv5",
      requirement2: "ウンディーネLv7",
      tp: 6,
      element: ["fire"],
      type: "補助",
      hit: 7,
      pair: ["fire", "water"],
    },
    {
      name: "フレイムウォール",
      description:
        "敵の前に炎の壁を作成して、触れた敵にダメージを与える。1回ダメージを与えたり、他の晶霊術の発動によって壁は消滅する。使い所が難しい。",
      requirement: "イフリートLv12",
      requirement2: "ノームLv9",
      tp: 12,
      element: ["fire"],
      type: "攻撃",
      hit: 1,
      pair: ["fire", "earth"],
    },
    {
      name: "エクスプロード",
      description:
        "巨大な爆発を発生させて敵にダメージを与える。敵が浮き上がって叩きつけられるとダウン状態となる。隠し大晶霊が不要なため後半ではかなりフリンジしやすい強力な術。",
      requirement: "イフリートLv15",
      requirement2: "ヴォルトLv9",
      tp: 36,
      element: ["fire"],
      type: "攻撃",
      hit: 4,
      pair: ["fire", "thunder"],
    },
    {
      name: "グレイブ",
      description: "",
      requirement: "メルディ加入時に習得済み",
      tp: 7,
      element: ["earth"],
      type: "攻撃",
      hit: 3,
      pair: ["none"],
    },
    {
      name: "ロックブレイク",
      description:
        "地上から岩を突き出し敵に攻撃する。軽い敵は空中に浮かぶことも。",
      requirement: "ノームLv1",
      tp: 18,
      element: ["earth"],
      type: "攻撃",
      hit: 6,
      pair: ["earth"],
    },
    {
      name: "グランドダッシャー",
      description:
        "対象の敵の広範囲に岩の波を発生させてダメージを与える。範囲が広くダメージも大きい。",
      requirement: "ノームLv21",
      requirement2: "シャドウLv10",
      tp: 48,
      element: ["earth"],
      type: "攻撃",
      hit: 5,
      pair: ["earth", "dark"],
    },
    {
      name: "アイスニードル",
      description: "-",
      requirement: "メルディ加入時に習得済み",
      tp: 6,
      element: ["ice"],
      type: "攻撃",
      hit: 3,
      pair: ["none"],
    },
    {
      name: "フリーズランサー",
      description:
        "対象の敵の広範囲に鋭利な氷を投げてダメージを与える。詠唱時間が短く、敵の足止めや敵の術発動の邪魔に最適。",
      requirement: "セルシウスLv1",
      tp: 21,
      element: ["ice"],
      type: "攻撃",
      hit: 4,
      pair: ["ice"],
    },
    {
      name: "レジスト",
      description: "味方単体が術を受けるダメージを30%軽減する",
      requirement: "セルシウスLv10",
      requirement2: "ノームLv7",
      tp: 6,
      element: ["ice"],
      type: "補助",
      pair: ["ice", "earth"],
    },
    {
      name: "ブリザード",
      description:
        "吹雪を発生させ、敵全体にダメージを与える。稀に凍結状態となることも。ダメージは控えめですが敵全体にダメージを与えることができるのは強み。",
      requirement: "セルシウスLv12",
      requirement2: "シルフLv15",
      tp: 20,
      element: ["ice"],
      type: "攻撃",
      hit: 3,
      pair: ["ice", "wind"],
    },
    {
      name: "アブソリュート",
      description:
        "対象の敵1体を氷結させてダメージを与える。稀に凍結状態となることも。敵単体の上級術ですがダメージは控えめ。",
      requirement: "セルシウスLv14",
      requirement2: "ヴォルトLv12",
      tp: 30,
      element: ["ice"],
      type: "攻撃",
      hit: 3,
      pair: ["ice", "thunder"],
    },
    {
      name: "ライトニング",
      description: "-",
      requirement: "メルディ加入時に習得済み",
      tp: 7,
      element: ["thunder"],
      type: "攻撃",
      hit: 1,
      pair: ["none"],
    },
    {
      name: "サンダーブレード",
      description:
        "術者の中心に雷の剣で円を描き、当たった敵にダメージを与える。当てるためには敵の近くで発動させる必要があるため使いづらい。",
      requirement: "ヴォルトLv1",
      tp: 24,
      element: ["thunder"],
      type: "攻撃",
      hit: 4,
      pair: ["thunder"],
    },
    {
      name: "チャージ",
      description: "味方1人に術者のTPを100分け与える",
      requirement: "ヴォルトLv5",
      requirement2: "シルフLv13",
      tp: 100,
      element: ["thunder"],
      type: "補助",
      pair: ["thunder", "wind"],
    },
    {
      name: "リカバー",
      description: "味方1人の異常状態を回復する（戦闘不能は対象外）",
      requirement: "ヴォルトLv6",
      requirement2: "ノームLv11",
      tp: 10,
      element: ["thunder"],
      type: "回復",
      pair: ["thunder", "earth"],
    },
    {
      name: "インディグネイション",
      description:
        "選択した敵の周辺に巨大な雷を落としてダメージを与える。周囲の数体ほどは巻き込め、ダメージも大きい。",
      requirement: "ヴォルトLv15",
      requirement2: "レムLv10",
      tp: 52,
      element: ["thunder"],
      type: "攻撃",
      hit: 2,
      pair: ["thunder", "light"],
    },
    {
      name: "レイ",
      description:
        "対象の敵の上空から光のビームを発射しダメージを与える。周囲の数体を巻き込んでダメージを与えることが可能。",
      requirement: "レムLv1",
      tp: 30,
      element: ["light"],
      type: "攻撃",
      hit: 7,
      pair: ["light"],
    },
    {
      name: "ホーリーブレス",
      description: "味方単体のHPを徐々に回復させる",
      requirement: "レムLv15",
      requirement2: "イフリートLv20",
      tp: 8,
      element: ["light"],
      type: "補助",
      pair: ["light", "fire"],
    },
    {
      name: "ホーリーランス",
      description:
        "対象の敵に光の槍を放ちダメージを与える。ダメージが高く狙い撃ちに適した術です。",
      requirement: "レムLv21",
      requirement2: "マクスウェルLv20",
      tp: 52,
      element: ["light"],
      type: "攻撃",
      hit: 9,
      pair: ["light", "origin"],
    },
    {
      name: "ダークフォース",
      description:
        "対象の敵の周辺に闇の波動を発生させてダメージを与える。周囲の数体を巻き込んでダメージを与えることが可能。",
      requirement: "シャドウLv1",
      tp: 32,
      element: ["dark"],
      type: "攻撃",
      hit: 6,
      pair: ["dark"],
    },
    {
      name: "バリアー",
      description: "味方1人が敵から受けるダメージを20%軽減させる",
      requirement: "シャドウLv5",
      requirement2: "ヴォルトLv10",
      tp: 6,
      element: ["dark"],
      type: "補助",
      pair: ["dark", "thunder"],
    },
    {
      name: "ディープミスト",
      description: "対象の敵の命中率を低下させる",
      requirement: "シャドウLv5",
      requirement2: "ウンディーネLv15",
      tp: 6,
      element: ["dark"],
      type: "補助",
      pair: ["dark", "water"],
    },
    {
      name: "ブラッディハウリング",
      description:
        "対象の敵の周辺に大きな闇の波動を発生させてダメージを与える。ダークフォースをよりダメージが高く、周囲の数体を巻き込んでダメージを与えることが可能。",
      requirement: "シャドウLv23",
      requirement2: "ゼクンドゥスLv18",
      tp: 72,
      element: ["dark"],
      type: "攻撃",
      hit: 4,
      pair: ["dark", "time"],
    },
    {
      name: "メテオスウォーム",
      description:
        "対象の敵周辺に隕石を落下させてダメージを与える。広範囲の敵にダメージを与えるが隕石の場所に敵がいなければダメージを与えれないので使いにくい場合も。",
      requirement: "マクスウェルLv1",
      tp: 60,
      element: ["origin"],
      type: "攻撃",
      hit: 7,
      pair: ["origin"],
    },
    {
      name: "シューティングスター",
      description:
        "敵全体に流星を当てダメージを与える。画面全体に適用され、ダメージが高いNo1と言っていいほどの強力技。2体の隠し大晶霊が必要なので習得難易度も高いです。",
      requirement: "マクスウェルLv26",
      requirement2: "ゼクンドゥスLv26",
      tp: 80,
      element: ["origin"],
      type: "攻撃",
      hit: 12,
      pair: ["origin", "time"],
    },
    {
      name: "ディストーション",
      description:
        "対象の敵に固定で5000ダメージを与える。非常に強力でボス戦などで重宝します。術の発動時間が長いため通常弱い敵に使うと戦闘時間が長くなる点だけ注意。",
      requirement: "ゼクンドゥスLv1",
      tp: 64,
      element: ["time"],
      type: "攻撃",
      hit: 12,
      pair: ["time"],
    },
    {
      name: "スクラグネイション",
      description:
        "対象の敵周辺に時空の歪みを発生させ、敵にダメージを与えたときののけぞり時間を伸ばす",
      requirement: "ゼクンドゥスLv5",
      requirement2: "セルシウスLv30",
      tp: 16,
      element: ["time"],
      type: "補助",
      pair: ["time", "ice"],
    },
    {
      name: "ディレイ",
      description:
        "対象の敵周辺に時空の歪みを発生させ、敵の術の詠唱時間を2倍にする",
      requirement: "ゼクンドゥスLv20",
      requirement2: "ノームLv30",
      tp: 60,
      element: ["time"],
      type: "補助",
      pair: ["time", "earth"],
    },
    {
      name: "+メディカルプラス",
      description: "習得していると戦闘中の回復系晶霊術の効果がアップする。",
      requirement: "シルフLv10",
      requirement2: "レムLv10",
      element: [],
      type: "特殊",
      pair: ["wind", "light"],
    },
    {
      name: "+メンタルチャージ",
      description: "習得していると戦闘後のTP回復量がアップする。",
      requirement: "ノームLv5",
      requirement2: "シルフLv10",
      element: [],
      type: "特殊",
      pair: ["earth", "wind"],
    },
    {
      name: "+メディカルプラス",
      description: "習得していると戦闘中の回復系晶霊術の効果がアップする。",
      requirement: "シルフLv10",
      requirement2: "レムLv10",
      element: [],
      type: "特殊",
      pair: ["wind", "light"],
    },
    {
      name: "+フリーズガード",
      description:
        "習得していると戦闘中にパーティ全体が凍結状態にならなくなる。",
      requirement: "セルシウスLv10",
      requirement2: "イフリートLv10",
      element: [],
      type: "特殊",
      pair: ["ice", "fire"],
    },
    {
      name: "+パラライガード",
      description:
        "習得していると戦闘中にパーティ全体が麻痺状態にならなくなる。",
      requirement: "ヴォルトLv10",
      requirement2: "ウンディーネLv10",
      element: [],
      type: "特殊",
      pair: ["thunder", "water"],
    },
    {
      name: "+ライフレスキュー",
      description:
        "習得していると戦闘中にHPが少なくなった場合に徐々に回復する効果が現れる。",
      requirement: "ノームLv10",
      requirement2: "レムLv10",
      element: [],
      type: "特殊",
      pair: ["earth", "light"],
    },
    {
      name: "+アイテムゲッター",
      description:
        "戦闘中にテクニカルスマッシュが発生するとアイテム入手にボーナス2ポイント。",
      requirement: "シルフLv10",
      requirement2: "マクスウェルLv10",
      element: [],
      type: "特殊",
      pair: ["wind", "origin"],
    },
    {
      name: "+メンタルサプライ",
      description:
        "習得していると戦闘中に受けたダーメージに応じてTPが回復する。",
      requirement: "ノームLv20",
      requirement2: "マクスウェルLv20",
      element: [],
      type: "特殊",
      pair: ["earth", "origin"],
    },
    {
      name: "+ヒールウェポン",
      description: "習得していると戦闘中に敵を倒すとHPが回復する。",
      requirement: "レムLv10",
      requirement2: "シャドウLv10",
      element: [],
      type: "特殊",
      pair: ["light", "dark"],
    },
    {
      name: "+ライフアップ",
      description: "習得している状態でレベルアップするとHP+2のボーナスが付く。",
      requirement: "マクスウェルLv10",
      requirement2: "セルシウスLv10",
      element: [],
      type: "特殊",
      pair: ["origin", "ice"],
    },
    {
      name: "+メンタルアップ",
      description: "習得している状態でレベルアップするとTP+1のボーナスが付く。",
      requirement: "ゼクンドゥスLv10",
      requirement2: "イフリートLv10",
      element: [],
      type: "特殊",
      pair: ["time", "fire"],
    },
    {
      name: "+ポイズンガード",
      description: "習得していると戦闘中にパーティ全体が毒状態にならない。",
      requirement: "マクスウェルLv10",
      requirement2: "シャドウLv10",
      element: [],
      type: "特殊",
      pair: ["origin", "dark"],
    },
    {
      name: "+ドレインガード",
      description:
        "習得していると戦闘中にパーティ全体が能力低下の状態にならない。",
      requirement: "ゼクンドゥスLv10",
      requirement2: "マクスウェルLv10",
      element: [],
      type: "特殊",
      pair: ["time", "origin"],
    },
  ];

  return (
    <Main title={title}>
      <article>
        <PageSummary>
          エターニアの晶霊術一覧ページです。フリンジのシミュレータでどの組み合わせで術が発生するかを確認することもできます。
        </PageSummary>
        <Section>
          <SectionTitle>おすすめ晶霊術とフリンジ</SectionTitle>
          <div className="mb-8">
            <h3>おすすめ晶霊術</h3>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="フリーズランサー">
                詠唱時間が短く広範囲の敵にHITし、足止めできる
              </RoundedItem>
              <RoundedItem title="ナース">味方全体のHPを40%回復</RoundedItem>
              <RoundedItem title="グランドダッシャー">
                広範囲の敵に対してダメージを与え上級術の中で使い勝手が良い
              </RoundedItem>
              <RoundedItem title="シューティングスター">
                広範囲の敵に対してダメージを与える最強クラスの術
              </RoundedItem>
              <RoundedItem title="ディストーション">
                敵1体に5000ダメージ
              </RoundedItem>
            </RoundedContainer>
          </div>
          <div className="mb-8">
            <h3>おすすめフリンジ</h3>
            <p>
              基本的には知力が晶霊術のダメージに影響するため、知力の高いキールに攻撃術、メルディに回復が扱えるように振り分けすることがおすすめです。
            </p>
            <RoundedContainer title="バランス型">
              <div className="grid grid-cols-2 gap-3 pt-2 mb-3">
                <RoundedItem title="メルディ">
                  <ul>
                    <li>ウンディーネ</li>
                    <li>イフリート</li>
                    <li>ヴォルト</li>
                    <li>シャドウ</li>
                    <li>マクスウェル</li>
                  </ul>
                </RoundedItem>
                <RoundedItem title="キール">
                  <ul>
                    <li>シルフ</li>
                    <li>ノーム</li>
                    <li>セルシウス</li>
                    <li>レム</li>
                    <li>ゼクンドゥス</li>
                  </ul>
                </RoundedItem>
              </div>
              <RoundedItem title="発生する晶霊術の一例">
                ヒール / ナース / リザレクション / レイズデッド/
                グランドダッシャー / アブソリュート / リカバー /
                インディグネイション / ホーリーランス / ブラッディハウリング /
                シューティングスター / +フリーズガード / +アイテムゲッター /
                +メンタルサプライ / +ヒールウェポン / +ライフアップ /
                +メンタルアップ / +ドレインガード +ドレインガード
              </RoundedItem>
            </RoundedContainer>
          </div>
        </Section>
        <Section>
          <SectionTitle type="skill">晶霊術一覧</SectionTitle>
          <MagicPropertyList skills={skills} />
        </Section>
      </article>
    </Main>
  );
}
