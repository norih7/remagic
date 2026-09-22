import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import {
  getEnemyItemsData,
  getItemsData,
  getEnemyLocationsData,
} from "@/lib/db";
export const dynamic = "force-static";
import Link from "next/link";

const pageKey = "item-drop";
const title = deepLinks[pageKey].title;
const description =
  deepLinks[pageKey].seoDesc ??
  "アイテムドロップで入手できるおすすめのアイテムや装備品の一覧。序盤・中盤・終盤でおすすめの収集目標と狙い方をまとめています。";
const canonical = deepLinks[pageKey].path;

export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

type EnemyInfo = {
  enemyId: number;
  enemyName: string;
};

export default async function HomePage() {
  const enemyItems = await getEnemyItemsData();
  const items = await getItemsData();

  const result = enemyItems.reduce<
    Record<number, { itemName: string; enemysMap: Map<number, EnemyInfo> }>
  >((acc, curr) => {
    if (!acc[curr.itemId]) {
      acc[curr.itemId] = {
        itemName: curr.itemName,
        enemysMap: new Map<number, EnemyInfo>(),
      };
    }

    // 敵の重複を防止
    acc[curr.itemId].enemysMap.set(curr.enemyId, {
      enemyId: curr.enemyId,
      enemyName: curr.enemyName,
    });

    return acc;
  }, {});
  const test = Object.keys(result).map((key, index) => {
    const itemId = Number(key);
    const data = result[itemId];
    const enemies = [...data.enemysMap.values()].map((enemy, enemyIndex) => (
      <Link
        href={`/systems/enemy/${enemy.enemyId}`}
        className="text-xs font-bold inline-block bg-white p-1 border border-gray-500 rounded-md"
        key={enemyIndex}
      >
        {enemy.enemyName}
      </Link>
    ));
    const item = items.find((item) => item.id === itemId);
    return (
      <RoundedContainer key={index}>
        <h3>{data.itemName}</h3>
        <div className="text-xs grid grid-cols-1 gap-3">
          <RoundedItem title="説明">
            {item && item.effect}
            {item && item.special}
          </RoundedItem>
          <RoundedItem title="ドロップ">
            <div className="flex flex-wrap gap-2">{enemies}</div>
          </RoundedItem>
        </div>
      </RoundedContainer>
    );
  });

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        エターニアでは、購入や宝箱では手に入らない武器や防具があり、敵のドロップでしか入手できないものも少なくありません。収集の優先順位を意識して、序盤・中盤・終盤で効率よく強化していくのが安定したプレイにつながります。
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>おすすめのドロップアイテム</SectionTitle>
        <div className="mb-6">
          <RoundedContainer>
            <div className="mb-3">
              <h3>シーブスマント</h3>
              <Tag>アクセサリ</Tag>
              <Tag>序盤で入手可能</Tag>
            </div>
            <RoundedItem title="特徴" className="mb-3">
              ルーンボトルで変化させて最終的にスマッシュマントへ変化するアクセサリ。スマッシュマントは最大4つ確保したいところ。
            </RoundedItem>
            <RoundedItem title="狙い方">
              <p>
                ミンツ周辺のフィールドに出現するバンデットを周回しましょう。最序盤から入手可能でアイテムドロップ率も12%と高め。
              </p>
              <GuideList
                items={[{ title: "バンデット", href: "/systems/enemy/0" }]}
              />
            </RoundedItem>
          </RoundedContainer>

          <RoundedContainer>
            <div className="mb-3">
              <h3>ワンダーバッグ</h3>
              <Tag>武器</Tag>
              <Tag>チャットの最強装備</Tag>
            </div>
            <RoundedItem title="特徴" className="mb-3">
              チャットの最強武器はドロップでのみ入手可能です。頑張ってドロップを狙いましょう。
            </RoundedItem>
            <RoundedItem title="狙い方">
              <p>
                隠しダンジョン「きらめきの塔」で出現するガンナーを周回しましょう。アイテムドロップ率は4%と低いのでスマッシュマントなどを活用して倒しましょう。
              </p>
              <GuideList
                items={[{ title: "ガンナー", href: "/systems/enemy/253" }]}
              />
            </RoundedItem>
          </RoundedContainer>

          <RoundedContainer>
            <div className="mb-3">
              <h3>カオスシールド</h3>
              <Tag>防具</Tag>
              <Tag>リッドの最強盾</Tag>
            </div>
            <RoundedItem title="特徴" className="mb-3">
              カオスシールドは防御+40とリッドの盾で一番数値が高いです。特殊効果などで他の盾を装備することもありますが防御力最強の盾はドロップで入手します。
            </RoundedItem>
            <RoundedItem title="狙い方">
              <p>
                ラストダンジョン「シゼル城」で出現するファイアウォーリアを周回しましょう。アイテムドロップ率は12%と割と高めです。
              </p>
              <GuideList
                items={[
                  { title: "ファイアウォーリア", href: "/systems/enemy/102" },
                ]}
              />
            </RoundedItem>
          </RoundedContainer>
        </div>
      </section>
      {/* 
      <section className="mb-12">
        <SectionTitle>序盤でおすすめのドロップ専用装備</SectionTitle>
        <RoundedContainer>
          <div className="mb-3">
            <h3>序盤の狙い</h3>
            <Tag>戦闘の安定重視</Tag>
          </div>
          <RoundedItem title="おすすめの考え方" className="mb-3">
            序盤は「使いやすい武器」「安定する防具」「ドロップ率アップの補助」が最優先です。最初から強いものを追いかけるより、戦闘が楽になる装備を確保していく方が、後半の育成がしやすくなります。
          </RoundedItem>
          <RoundedItem title="狙うべきポイント">
            基本は、ドロップで得られる回復・防御系アイテムと、アイテムドロップ率を上げる系の装備をまとめて集めるのがおすすめです。前半の戦闘に慣れるまでは、性能だけでなく入手しやすさが重要です。
          </RoundedItem>
        </RoundedContainer>
      </section>

      <section className="mb-12">
        <SectionTitle>中盤でおすすめのドロップ専用装備</SectionTitle>
        <RoundedContainer>
          <div className="mb-3">
            <h3>中盤の狙い</h3>
            <Tag>育成の土台作り</Tag>
          </div>
          <RoundedItem title="おすすめの考え方" className="mb-3">
            中盤になると、単純な攻撃力よりも「相手に対して効きやすい武器」「ダメージを受けにくい防具」の価値が高くなります。ドロップ専用装備は、ここで本領を発揮します。
          </RoundedItem>
          <RoundedItem title="優先順位">
            まずは自分のパーティ構成に合う武器を確保し、その次に防具とアクセサリで穴を埋めていくと安定します。わざと一部の装備に偏らず、戦闘全体の柔軟性を持たせるのがコツです。
          </RoundedItem>
        </RoundedContainer>
      </section>

      <section className="mb-12">
        <SectionTitle>終盤でおすすめのドロップ専用装備</SectionTitle>
        <RoundedContainer>
          <div className="mb-3">
            <h3>終盤の狙い</h3>
            <Tag>高難度対応</Tag>
          </div>
          <RoundedItem title="おすすめの考え方" className="mb-3">
            終盤では、最上位装備の収集が戦闘の難易度を大きく左右します。ドロップ専用の強い武器や防具は、通常の購入品では代用しにくいため、ここの収集を抜かすと後半で苦しくなりがちです。
          </RoundedItem>
          <RoundedItem title="狙うべき基準">
            攻撃系・防御系・補助系をバランスよくそろえることが重要です。最終的には、自分の編成に合う装備を揃えてから、余裕のある部分だけ追い詰める形が最も効率的です。
          </RoundedItem>
        </RoundedContainer>
      </section> */}

      <section className="mb-12">
        <SectionTitle>ドロップアイテム一覧</SectionTitle>
        {test}
      </section>
    </article>
  );
}
