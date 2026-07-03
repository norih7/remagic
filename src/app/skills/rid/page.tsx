import SetPageTitle from "@/components/SetPageTitle";
import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "リッドの特技";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  const skills = [
    {
      name: "魔神剣",
      ruby: "まじんけん",
      description:
        "剣圧を放つ飛び攻撃。敵の詠唱を妨げたいときの飛び道具として結構使えます。",
      remarks: "後続技: 魔神剣・双牙、魔神千裂破",
      requirement: "斬Lv1/突Lv1",
      tp: 4,
      hit: 1,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "雷神剣",
      ruby: "らいじんけん",
      description:
        "雷属性の突き攻撃。突きがヒットすると追加で雷ダメージを与える。",
      remarks: "後続技: 風雷神剣、雷神双破斬",
      requirement: "斬Lv1/突Lv2",
      tp: 4,
      hit: 2,
      element: ["thunder"],
      type: "特技",
    },
    {
      name: "虎牙破斬",
      ruby: "こがはざん",
      description:
        "上下の2段斬りを行う。動作に無駄がなく終盤でも活躍する特技。",
      remarks: "後続技: 虎牙連斬、雷神双破斬",
      requirement: "斬Lv5/突Lv2",
      tp: 6,
      hit: 2,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "散沙雨",
      ruby: "ちりさだめ",
      description:
        "最大5HITの連続突きを行う。武器の命中率が低いとあまりHITしないので注意。",
      remarks: "後続技: 秋沙雨、魔神千裂破、空破絶掌撃",
      requirement: "斬Lv2/突Lv5",
      tp: 7,
      hit: 5,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "裂空斬",
      ruby: "れっくうざん",
      description:
        "円を描きながら回転斬りを行う。敵の背後に回り込むために使用するのも有効。使用回数が100を超えるとジャンプ中に発動可能になり、使い道が広がります。",
      remarks: "後続技: 真空列斬、翔雨裂空撃",
      requirement: "斬Lv16/突Lv8",
      tp: 7,
      hit: 5,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "風雷神剣",
      ruby: "ふうらいじんけん",
      description:
        "雷神剣を強化した攻撃。使い勝手的には雷神剣と大きな差はないが、のちに鳳凰天駆を習得するために多くの使用回数が必要となります。1撃目は風属性で雷撃は雷属性。習得にはレベル以外に「雷神剣」の使用が50回以上必要。",
      remarks: "後続技: 空破絶掌撃",
      requirement: "斬Lv4/突Lv10",
      requirement2: "雷神剣50回以上",
      tp: 8,
      hit: 3,
      element: ["wind", "thunder"],
      type: "特技",
    },
    {
      name: "魔神剣・双牙",
      ruby: "まじんけんそうが",
      description:
        "魔神剣をテンポよく2回放つ。一定の距離の敵にしか届かないが、タイミングをずらした素早い2連撃は魅力的。習得にはレベル以外に「魔神剣」の使用が48回以上必要。",
      remarks: "後続技: 魔神連牙斬",
      requirement: "斬Lv10/突Lv3",
      requirement2: "魔神剣48回",
      tp: 8,
      hit: 3,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "虎牙連斬",
      ruby: "こがれんざん",
      description:
        "虎牙破斬を強化した攻撃。虎牙破斬から乗り換える人が多数の特技でかなり使い勝手がいい。習得にはレベル以外に「虎牙破斬」の使用が150回以上必要。",
      remarks: "後続技: 雷神双破斬、猛虎連撃破",
      requirement: "斬Lv13/突Lv4",
      requirement2: "虎牙破斬150回",
      tp: 10,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "秋沙雨",
      ruby: "あきさだめ",
      description:
        "最大11HITの連続突きを行う。最後には突き上げ斬りをするためコンボに使う場合は使い勝手が難しい。習得にはレベル以外に「散沙雨」の使用が130回以上必要。",
      remarks: "後続技: 翔雨裂空撃",
      requirement: "斬Lv4/突Lv13",
      requirement2: "散沙雨130回",
      tp: 12,
      hit: 11,
      element: ["normal"],
      type: "奥義",
    },
    {
      name: "雷神双破斬",
      ruby: "らいじんそうはざん",
      description:
        "雷神剣と虎牙破斬を組み合わせた奥義。習得にはレベル以外に「雷神剣」の使用が16回以上、「虎牙破斬」の使用が16回以上必要。",
      requirement: "斬Lv7/突Lv5",
      requirement2: "雷神剣16回以上/虎牙破斬16回以上",
      tp: 4,
      hit: 4,
      element: ["thunder"],
      type: "奥義",
    },
    {
      name: "魔神千裂破",
      ruby: "まじんせんれつは",
      description:
        "魔神剣と散沙雨を組み合わせた奥義。習得にはレベル以外に「魔神剣」の使用が24回以上、「散沙雨」の使用が24回以上必要。",
      requirement: "斬Lv5/突Lv7",
      requirement2: "魔神剣24回/散沙雨24回",
      tp: 10,
      hit: 6,
      element: ["normal"],
      type: "奥義",
    },
    {
      name: "魔神連牙斬",
      ruby: "まじんれんがざん",
      description:
        "魔神剣を4回連続で放つ。習得にはレベル以外に「魔神剣」の使用が60回以上、「魔神剣双牙」の使用が50回以上必要。",
      requirement: "斬Lv13/突Lv1",
      requirement2: "魔神剣60回/魔神剣双牙50回",
      tp: 15,
      hit: 4,
      element: ["normal"],
      type: "奥義",
    },
    {
      name: "空破絶掌撃",
      ruby: "くうはぜっしょうげき",
      description:
        "強力な突き攻撃。巨大な敵も巻き込んでくれるので使い勝手がいい。習得にはレベル以外に「雷神剣」の使用が70回以上、「散沙雨」の使用が70回以上必要。",
      requirement: "斬Lv1/突Lv14",
      requirement2: "雷神剣70回/散沙雨70回",
      tp: 15,
      hit: 2,
      element: ["normal"],
      type: "奥義",
    },
    {
      name: "閃空裂破",
      ruby: "せんくうれっぱ",
      description:
        "敵を巻き込みながら攻撃。光属性の攻撃であり、命中率が高ければ中々使い勝手がいい。",
      remarks: "後続技: 閃空翔裂破",
      requirement: "斬Lv9/突Lv16",
      tp: 10,
      hit: 8,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "閃空双破斬",
      ruby: "せんくうそうはざん",
      description: "閃空裂破と虎牙破斬を組み合わせた奥義。",
      requirement: "斬Lv19/突Lv14",
      tp: 20,
      hit: 8,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "翔雨裂空撃",
      ruby: "しょううれっくうげき",
      description:
        "裂空斬と秋沙雨を組み合わせた奥義。最大HIT数は19ですが、これを出すのは難しい。習得にはレベル以外に「裂空斬」の使用が80回以上、「秋沙雨」の使用が120回以上必要。",
      requirement: "斬Lv14/突Lv19",
      requirement2: "裂空斬80回/秋沙雨120回",
      tp: 24,
      hit: 19,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "閃空翔裂破",
      ruby: "せんくうしょうれつは",
      description: "閃空裂破を強化した攻撃。",
      requirement: "斬Lv5/突Lv22",
      requirement2: "閃空裂破250回",
      tp: 14,
      hit: 4,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "真空裂斬",
      ruby: "しんくうれつざん",
      description:
        "裂空斬を強化した攻撃。風属性の攻撃となり、モーションが早くなっている。",
      remarks: "後続技: 翔雨裂空撃",
      requirement: "斬Lv23/突Lv4",
      tp: 14,
      hit: 5,
      element: ["wind"],
      type: "特技",
    },
    {
      name: "鳳凰天駆",
      ruby: "ほうおうてんく",
      description:
        "飛び上がって敵に突撃する。エターニアの中で一番使い勝手がいい特技。連携でも威力を発揮する。習得にはレベル以外に「風雷神剣」の使用が200回以上、「空破絶掌撃破」の使用が150回以上必要。",
      requirement: "斬Lv22/突Lv24",
      requirement2: "風雷神剣200回/空破絶掌撃破150回",
      tp: 40,
      hit: 9,
      element: ["fire"],
      type: "奥義",
    },
    {
      name: "猛虎連撃破",
      ruby: "もうこれんげきは",
      description:
        "上下連続斬りを繰り返す。相手が固くないのであれば攻撃の隙を与えない戦い方ができる。習得にはレベル以外に「虎牙破斬」の使用が200回以上必要。",
      requirement: "斬Lv24/突Lv20",
      requirement2: "虎牙破斬200回",
      tp: 40,
      hit: 8,
      element: ["normal"],
      type: "奥義",
    },
    {
      name: "風刃縛封",
      ruby: "ふうじんばくふう",
      description: "敵を空中に浮かす",
      requirement: "斬Lv30/突Lv30",
      tp: 40,
      hit: 2,
      element: ["wind"],
      type: "奥義",
    },
    {
      name: "極光壁",
      ruby: "きょっこうへき",
      description: "戦闘中にHPが減り赤くなった状態で○×△を同時押しすると発動。",
      requirement: "ストーリーで習得",
      tp: 25,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "極光剣",
      ruby: "きょっこうけん",
      description: "極光壁発動中に○ボタンを押すと追加発動。",
      requirement: "ストーリーで習得",
      tp: 50,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "極光波",
      ruby: "きょっこうは",
      description:
        "ラスボス戦で使用する。エターナルファイナリティを発動されたときに○×△を同時押しすると発動。",
      requirement: "ストーリーで習得",
      tp: 25,
      element: ["light"],
      type: "奥義",
    },
  ] as Skill[];
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          リッドの特技と奥義の一覧ページです。習得に必要な「斬レベル」などの説明、秘奥義の説明は別ページがありますので参照ください。
        </p>
        <GuideList
          items={[{ title: "斬レベル/突レベルの説明", href: "/systems/skill" }]}
        ></GuideList>
      </PageSummary>

      {/* <section className="mb-12">
        <SectionTitle type="data">おすすめ特技/奥義</SectionTitle>
      </section> */}

      <section className="mb-12">
        <SectionTitle type="skill">リッドの特技/奥義一覧</SectionTitle>
        <SkillPropertyList skills={skills} />
      </section>
    </article>
  );
}
