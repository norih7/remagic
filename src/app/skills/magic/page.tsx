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

// 2. ユーザーのケイジ状態の型定義
export interface UserCageState {
  merdy: (string | null)[];
  kyle: (string | null)[];
}

// 3. 全体で装備されている属性のリストを取得する関数
function getEquippedElements(cageState: UserCageState): string[] {
  const allElements = [...cageState.merdy, ...cageState.kyle].filter(
    (element): element is string => element !== null,
  ); // nullを除外しつつ型をstringに絞り込む

  // 重複を除外した配列を返す
  return Array.from(new Set(allElements));
}

// 4. フィルタリング関数
export function filterAvailableSkills(
  skills: Skill[],
  cageState: UserCageState,
): Skill[] {
  // メルディ側の装備リスト（null除外）
  const merdyElements = cageState.merdy.filter((e): e is string => e !== null);
  // キール側の装備リスト（null除外）
  const kyleElements = cageState.kyle.filter((e): e is string => e !== null);

  return skills.filter((skill) => {
    const requiredPairs = skill.pair ?? [];

    // pair がない（初期習得など）ものは無条件で表示
    if (requiredPairs.length === 0) {
      return true;
    }

    // --- 【重要】異ケイジ間（分散）の判定ロジック ---
    // 2属性のフリンジ術の場合（例: "fire" と "water"）
    if (requiredPairs.length === 2) {
      const [attr1, attr2] = requiredPairs;

      // パターンA: メルディに attr1、キールに attr2 がある
      const patternA =
        merdyElements.includes(attr1) && kyleElements.includes(attr2);

      // パターンB: メルディに attr2、キールに attr1 がある
      const patternB =
        merdyElements.includes(attr2) && kyleElements.includes(attr1);

      // ※ どちらのケイジにも同じ属性が重複して入っている場合（片方のケイジ内で完結している場合）は除外したいため、
      // 「両方のケイジにまたがって存在しているか」を厳密にチェックします。
      // 例: メルディに water, fire が両方ある場合は、kyle側に片方かないと成立しない
      return patternA || patternB;
    }

    // 1属性のみ、または3属性以上の特殊なフリンジがある場合の拡張用（必要に応じて）
    return false;
  });
}

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
      pair: ["water", "wind"],
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
        "巨大な爆発を発生させて敵にダメージを与える。敵が浮き上がって叩きつけられるとダウン状態となる。後半ではかなりフリンジしやすい強力な術。",
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
      description: "-",
      requirement: "メルディ加入時に習得済み",
      tp: 7,
      element: ["earth"],
      type: "攻撃",
      hit: 3,
      pair: ["none"],
    },
    {
      name: "ロックブレイク",
      description: "-",
      requirement: "ノームLv1",
      tp: 18,
      element: ["earth"],
      type: "攻撃",
      hit: 6,
      pair: ["earth"],
    },
    {
      name: "グランドダッシャー",
      description: "-",
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
      description: "-",
      requirement: "セルシウスLv1",
      tp: 21,
      element: ["ice"],
      type: "攻撃",
      hit: 4,
      pair: ["ice"],
    },
    {
      name: "レジスト",
      description: "-",
      requirement: "セルシウスLv10",
      requirement2: "ノームLv7",
      tp: 6,
      element: ["ice"],
      type: "補助",
      pair: ["ice", "earth"],
    },
    {
      name: "ブリザード",
      description: "-",
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
      description: "-",
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
      description: "-",
      requirement: "ヴォルトLv1",
      tp: 24,
      element: ["thunder"],
      type: "攻撃",
      hit: 4,
      pair: ["thunder"],
    },
    {
      name: "チャージ",
      description: "-",
      requirement: "ヴォルトLv5",
      requirement2: "シルフLv13",
      tp: 100,
      element: ["thunder"],
      type: "補助",
      pair: ["thunder", "wind"],
    },
    {
      name: "リカバー",
      description: "-",
      requirement: "ヴォルトLv6",
      requirement2: "ノームLv11",
      tp: 10,
      element: ["thunder"],
      type: "回復",
      pair: ["thunder", "earth"],
    },
    {
      name: "インディグネイション",
      description: "-",
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
      description: "-",
      requirement: "レムLv1",
      tp: 30,
      element: ["light"],
      type: "攻撃",
      hit: 7,
      pair: ["light"],
    },
    {
      name: "ホーリーブレス",
      description: "-",
      requirement: "レムLv15",
      requirement2: "イフリートLv20",
      tp: 8,
      element: ["light"],
      type: "補助",
      pair: ["light", "fire"],
    },
    {
      name: "ホーリーランス",
      description: "-",
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
      description: "-",
      requirement: "シャドウLv1",
      tp: 32,
      element: ["dark"],
      type: "攻撃",
      hit: 6,
      pair: ["dark"],
    },
    {
      name: "バリアー",
      description: "-",
      requirement: "シャドウLv5",
      requirement2: "ヴォルトLv10",
      tp: 6,
      element: ["dark"],
      type: "補助",
      pair: ["dark", "thunder"],
    },
    {
      name: "ディープミスト",
      description: "-",
      requirement: "シャドウLv5",
      requirement2: "ウンディーネLv15",
      tp: 6,
      element: ["dark"],
      type: "補助",
      pair: ["dark", "water"],
    },
    {
      name: "ブラッディハウリング",
      description: "-",
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
      description: "-",
      requirement: "マクスウェルLv1",
      tp: 60,
      element: ["origin"],
      type: "攻撃",
      hit: 7,
      pair: ["origin"],
    },
    {
      name: "シューティングスター",
      description: "-",
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
      description: "-",
      requirement: "ゼクンドゥスLv1",
      tp: 64,
      element: ["time"],
      type: "攻撃",
      hit: 12,
      pair: ["time"],
    },
    {
      name: "スクラグネイション",
      description: "-",
      requirement: "ゼクンドゥスLv5",
      requirement2: "セルシウスLv30",
      tp: 16,
      element: ["time"],
      type: "補助",
      pair: ["time", "ice"],
    },
    {
      name: "ディレイ",
      description: "-",
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

  const userCageState = {
    merdy: [
      "wind", // キールのケイジ 1枠目
      "earth", // 2枠目
      "ice", // 3枠目
      "light",
      "time",
    ],
    kyle: [
      "water", // メルディのケイジ 1枠目
      "fire", // 2枠目
      "thunder", // 3枠目
      "dark",
      "origin",
    ],
  };
  const availableSkills = filterAvailableSkills(skills, userCageState);

  return (
    <Main title={title}>
      <article>
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
            <RoundedContainer>
              <h4>バランス型</h4>
              <div className="grid grid-cols-2 gap-3 mb-3">
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
              <RoundedItem title="発生する術">
                ヒール / アシッドレイン / ナース / リザレクション / レイズデッド
                / コンセントレート / フレイムウォール / グランドダッシャー /
                アブソリュート / チャージ / リカバー / インディグネイション /
                ホーリーブレス / ホーリーランス / ブラッディハウリング /
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
