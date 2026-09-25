import SetPageTitle from "@/components/SetPageTitle";
import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";
import { skillLinks, elementMap } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import Tag from "@/components/Tag";
import Elements from "@/components/Elements";
import RoundedInlineList from "@/components/RoundedInlineList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "special-skill";
const title = skillLinks[pageKey].title;
const canonical = skillLinks[pageKey].path;
const description = skillLinks[pageKey].seoDesc;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };
export const metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  const skills = {
    rid: [
      {
        name: "緋凰絶炎衝",
        requirement: "鳳凰天駆の使用回数が250回以上",
        trigger: "鳳凰天駆ヒット時に再び鳳凰天駆を発動させる",
        description:
          "リッドの一番使い勝手が良い秘奥義。攻撃範囲が広いため雑魚的一掃から強敵を巻き込んだダメージ付与まで幅広く使えます。",
        tp: 50,
        element: ["fire"],
      },
      {
        name: "龍虎滅牙斬",
        requirement: "猛虎連撃破の使用回数が160回以上",
        trigger:
          "敵のHPが2000+猛虎連撃破の使用回数の以下になったとき、猛虎連撃破ヒット時に再び猛虎連撃破を発動させる",
        description:
          "発動条件が難しい秘奥義。猛虎連撃破を9999回使用していればHPが11999以下になった敵で発動可能。",
        tp: 20,
        element: ["normal"],
      },
      {
        name: "風塵封縛殺",
        requirement: "風刃縛封の使用回数が160回以上",
        trigger:
          "風耐性50以下の敵のHPが20000以下になったとき、風刃縛封ヒット時に再び風刃縛封を発動させる",
        description: "-",
        tp: 24,
        element: ["wind"],
      },
      // {
      //   name: "",
      //   description:
      //     "猛毒をたっぷりと染み込ませた特殊なハンマーを投げつける水属性の特技。ヒットした相手を確率で毒状態に陥れます。",
      //   requirement: "特定のサブイベントで習得",
      //   tp: 16,
      //   hit: 4,
      //   element: ["water"],
      //   type: "特技",
      // },
    ],
    farth: [
      {
        name: "獅吼爆砕陣",
        description:
          "お馴染みのピコピコハンマーを投げて標的を攻撃するチャットの代名詞的な特技。見事命中すると、一定確率で相手を気絶（スタン）状態にさせることができます。",
        requirement: "チャット加入時に初期習得",
        tp: 50,
        hit: 4,
        element: ["normal"],
        type: "特技",
      },
      {
        name: "火龍炎舞",
        description:
          "お馴染みのピコピコハンマーを投げて標的を攻撃するチャットの代名詞的な特技。見事命中すると、一定確率で相手を気絶（スタン）状態にさせることができます。",
        requirement: "チャット加入時に初期習得",
        tp: 50,
        hit: 4,
        element: ["normal"],
        type: "特技",
      },
    ],
  };

  const ridList = skills.rid.map((item, index) => {
    return (
      <RoundedContainer key={index}>
        <div className="mb-3">
          <h3>{item.name}</h3>
          <div className="flex flex-wrap gap-2">
            <RoundedInlineList title="消費TP" type="wide">
              {item.tp}
            </RoundedInlineList>
            <RoundedInlineList title="攻撃属性" type="wide">
              <Elements list={item.element as (keyof typeof elementMap)[]} />
            </RoundedInlineList>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* <RoundedItem title="消費TP">{item.tp}</RoundedItem>
          <RoundedItem title="属性">
            <Elements list={item.element as (keyof typeof elementMap)[]} />
          </RoundedItem> */}
          <RoundedItem title="習得条件">{item.requirement}</RoundedItem>
          <RoundedItem title="発動方法">{item.trigger}</RoundedItem>
        </div>
        <RoundedItem title="説明">{item.description}</RoundedItem>
      </RoundedContainer>
    );
  });

  const farthList = skills.farth.map((item, index) => {
    return (
      <RoundedContainer key={index}>
        <div className="mb-3">
          <h3>{item.name}</h3>
          <Tag>炎属性</Tag>
        </div>
        <RoundedItem title="発動方法">aaa</RoundedItem>
        <RoundedItem title="習得条件">aaa</RoundedItem>
        <RoundedItem title="消費TP">aaa</RoundedItem>
        <RoundedItem title="属性">aaa</RoundedItem>
      </RoundedContainer>
    );
  });

  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <div className="mb-2">
          <p>準備中</p>
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
        <SectionTitle type="skill">リッドの秘奥義一覧</SectionTitle>
        {ridList}
      </section>
      {/* <section className="mb-12">
        <SectionTitle type="skill">ファラの秘奥義一覧</SectionTitle>
        {farthList}
      </section> */}
    </article>
  );
}
