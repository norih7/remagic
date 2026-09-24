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

const pageKey = "rare-item-drop";
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
        敵がドロップするアイテムでもレアなアイテムや装備品を紹介します。どれも何らかの使い道があったり、強力な装備なのでコンプリートを目指しましょう。
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>最強クラスの装備品</SectionTitle>
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

        <RoundedContainer>
          <div className="mb-3">
            <h3>リバヴィウサー</h3>
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
      </section>

      <section className="mb-12">
        <SectionTitle>序盤おすすめ</SectionTitle>
        <RoundedContainer>
          <div className="mb-3">
            <h3>シーブスマント</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            ルーンボトルで変化させて最終的にスマッシュマントへ変化するアクセサリ。スマッシュマントはアイテムドロップアップに繋がるため重要なアクセサリです。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>
              ミンツ周辺のフィールドに出現するバンデットを周回しましょう。最序盤から入手可能でアイテムドロップ率も12%と高め。最大確保は4つ。
            </p>
            <GuideList
              items={[{ title: "バンデット", href: "/systems/enemy/0" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>エルヴンブーツ</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            戦闘中の移動速度を20%アップさせるアクセサリ。キールとフォッグは移動速度が遅く、特にネレイドの迷宮などリッド以外を操作する場合に有効。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>
              霊峰ファロース周辺のフィールドに出現するグラップラーを周回しましょう。アイテムドロップ率は2%と低いですがセレスティアへ渡る前に2つ以上確保しておくことを推奨します。最大確保は4つ。
            </p>
            <GuideList
              items={[{ title: "グラップラー", href: "/systems/enemy/148" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>リバースドール</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            戦闘不能時に壊れる代わりに自動回復するアクセサリ。エターニアは戦闘中に装備の付け替えができるため、戦闘不能になる直前にメニューを開いてリバースドールを装備させる戦法ができます。なかなか勝てない強敵との闘いで活躍します。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>
              いざないの密林に出現するサイズキャリアーを周回しましょう。序盤から入手可能でアイテムドロップ率も10%と高め。最大確保数は15個。
            </p>
            <GuideList
              items={[{ title: "サイズキャリアー", href: "/systems/enemy/18" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>バスタードソード</h3>
            <Tag>武器</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            リッドの武器で使いやすい剣。ドロップでしか入手できず、バロールへ行くまで十分使える性能なので是非ドロップを狙いましょう。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>いざないの密林など出現するスケルトンを周回しましょう。</p>
            <GuideList
              items={[{ title: "スケルトン", href: "/systems/enemy/31" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>ニンブルレイピア</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            リッドの武器で風属性。風晶霊の空洞へ訪れたタイミングでは強力な武器。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>風晶霊の空洞などに出現するボーンナイトを周回しましょう。</p>
            <GuideList
              items={[{ title: "ボーンナイト", href: "/systems/enemy/155" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>フランベルジュ</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            リッドの武器で火属性。こちらも火晶霊の谷へ訪れたタイミングでは強力な武器。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>火晶霊の谷などに出現するファイアバードを周回しましょう。</p>
            <GuideList
              items={[{ title: "ファイアバード", href: "/systems/enemy/78" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>グレートソード</h3>
            <Tag>武器</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            リッドの件。こちらもファロース到着時点では強力な武器。
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>
              霊峰ファロース周辺のフィールドに出現するフェザーマジックを周回しましょう。
            </p>
            <GuideList
              items={[{ title: "フェザーマジック", href: "/systems/enemy/83" }]}
            />
          </RoundedItem>
        </RoundedContainer>
      </section>

      <section className="mb-12">
        <SectionTitle>中盤</SectionTitle>
        <RoundedContainer>
          <div className="mb-3">
            <h3>アースブレイド</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            -
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>地晶霊の廃坑に出現するハードホーンを周回しましょう。</p>
            <GuideList
              items={[{ title: "ハードホーン", href: "/systems/enemy/58" }]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>アイスコフィン</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            -
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>氷晶霊の山に出現するアイスウォーリアを周回しましょう。</p>
            <GuideList
              items={[
                { title: "アイスウォーリア", href: "/systems/enemy/168" },
              ]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <div className="mb-3">
            <h3>プリティミトン</h3>
            <Tag>アクセサリ</Tag>
            <Tag>序盤で入手可能</Tag>
          </div>
          <RoundedItem title="特徴" className="mb-3">
            -
          </RoundedItem>
          <RoundedItem title="狙い方">
            <p>バリル城に出現するストロングホーンを周回しましょう。</p>
            <GuideList
              items={[
                { title: "ストロングホーン", href: "/systems/enemy/181" },
              ]}
            />
          </RoundedItem>
        </RoundedContainer>
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
    </article>
  );
}
