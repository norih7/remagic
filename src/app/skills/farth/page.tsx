import SetPageTitle from "@/components/SetPageTitle";
import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ファラの特技";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  const skills = [
    {
      name: "三散華",
      ruby: "さざんか",
      description:
        "脚の蹴り上げ下ろしによる3連撃。連撃の最後は的を奥に蹴飛ばす。連撃中はスキが多いので命中率が低い場合や硬い的には注意。",
      requirement: "拳Lv2/蹴Lv2",
      tp: 6,
      hit: 3,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "連牙弾",
      ruby: "れんがだん",
      description:
        "連続した拳のパンチを繰り出す。パンチなので攻撃範囲はかなり狭い。",
      requirement: "拳Lv5/蹴Lv2",
      tp: 8,
      hit: 6,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "飛燕連脚",
      ruby: "ひえんれんきゃく",
      description:
        "地上からジャンプし、空中で蹴りを繰り出す。非常に使いやすく、途中でキャンセルして空中からの技の連携も可能。",
      requirement: "拳Lv4/蹴Lv5",
      tp: 7,
      hit: 3,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "鷹爪蹴撃",
      ruby: "ようそうしゅうげき",
      description:
        "ジャンプ中の空中から垂直に蹴り下ろして落下する。動作が早いのでこちらも使いやすい。地上では出すことができない。",
      requirement: "拳Lv3/蹴Lv8",
      tp: 8,
      hit: 3,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "臥龍空破",
      ruby: "がりゅうくうは",
      description:
        "地上から拳のため攻撃を行い、敵を空中に突き上げる攻撃。ファラの突進などの動作があり、使いこなすのはコツが必要。空中コンボにつなげるのにはよい。",
      requirement: "拳Lv8/蹴Lv4",
      tp: 12,
      hit: 3,
      element: ["wind"],
      type: "特技",
    },
    {
      name: "散華猛襲脚",
      ruby: "さんかもうしゅうきゃく",
      description:
        "空中でのみ発動できる技。空中から斜めに落下して三散華による蹴り上げ攻撃を行う。",
      requirement: "拳Lv11/蹴Lv12",
      tp: 12,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "双撞掌底破",
      ruby: "ようどうしょうていは",
      description: "-",
      requirement: "拳Lv10/蹴Lv8",
      tp: 12,
      hit: 2,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "飛燕連天脚",
      ruby: "ひえんれんてんきゃく",
      description:
        "飛燕連脚の昇華技。最後にムーンサルトによる一蹴りが加わっている。習得には「飛燕連脚」の使用が150回以上必要。",
      requirement: "拳Lv9/蹴Lv18",
      requirement2: "飛燕連脚150回",
      tp: 13,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "八葉連牙",
      ruby: "はちようれんが",
      description: "習得には「連牙弾」の使用が150回以上必要。",
      requirement: "拳Lv16/蹴Lv8",
      requirement2: "連牙弾150回",
      tp: 18,
      hit: 11,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "鷹爪落爆蹴",
      ruby: "ようそうらくばくしゅう",
      description:
        "習得には「散華猛襲脚」の使用が100回以上、「飛燕連天脚」の使用が100回以上必要。",
      requirement: "拳Lv22/蹴Lv25",
      requirement2: "散華猛襲脚100回/飛燕連天脚100回",
      tp: 20,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "獅子戦吼",
      ruby: "ししせんこう",
      description:
        "習得には「八葉連牙」の使用が100回以上、「双撞掌底破」の使用が160回以上必要。",
      requirement: "拳Lv22/蹴Lv14",
      requirement2: "八葉連牙100回/双撞掌底破160回",
      tp: 20,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "殺劇舞荒拳",
      ruby: "さつげきぶこうけん",
      description:
        "習得には「獅子戦吼」の使用が120回以上、「鷹爪落爆蹴」の使用が120回以上必要。",
      requirement: "拳Lv30/蹴Lv30",
      requirement2: "獅子戦吼120回/鷹爪落爆蹴120回",
      tp: 60,
      hit: 21,
      element: ["fire"],
      type: "特技",
    },
    {
      name: "治癒功",
      ruby: "ちゆこう",
      description:
        "ストーリー上で習得(モルルでのイベント)。仲間一人の毒状態を回復する。",
      tp: 8,
      element: [],
      type: "回復",
    },
    {
      name: "解毒功",
      ruby: "げどくこう",
      description:
        "ストーリー上で習得(モルルでのイベント)。仲間一人の毒状態を回復する。",
      tp: 8,
      element: [],
      type: "回復",
    },
    {
      name: "回生功",
      ruby: "かいせいこう",
      description:
        "ストーリー上で習得(ファロース教会でのイベント)。仲間一人の戦闘不能状態を回復する。",
      tp: 50,
      element: [],
      type: "回復",
    },
  ] as Skill[];
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          ファラの特技と奥義の一覧ページです。習得に必要な「拳レベル」などの説明、秘奥義の説明は別ページがありますので参照ください。
        </p>
        <div className="mb-4">
          <GuideList
            items={[
              { title: "拳レベル/蹴レベルの説明", href: "/systems/skill" },
            ]}
          ></GuideList>
        </div>
      </PageSummary>
      {/* 
      <section className="mb-12">
        <SectionTitle type="data">おすすめの特技</SectionTitle>
        <div className="advice">
          <p>準備中</p>
        </div>
      </section> */}

      <section className="mb-12">
        <SectionTitle type="skill">ファラの特技</SectionTitle>
        <SkillPropertyList skills={skills} />
      </section>
    </article>
  );
}
