
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
import ResponsiveImage from "@/components/ResponsiveImage";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "special-skill";
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
  const skills = {
    rid: [
      {
        name: "緋凰絶炎衝",
        requirement: "鳳凰天駆の使用回数が250回以上",
        trigger: "鳳凰天駆ヒット時に再び特技ボタンで鳳凰天駆を発動させる",
        description:
          "リッドの一番使い勝手が良い秘奥義。攻撃範囲が広いため雑魚的一掃から強敵を巻き込んだダメージ付与まで幅広く使え、戦闘中に何度でも使えます。鳳凰天駆が敵にヒットした瞬間に鳳凰天駆の特技ボタンを連打することで発動させやすいです。消費TPが多いのと火属性耐性を持っている敵には1ダメージしか与えられないことがある点に注意。",
        tp: 50,
        element: ["fire"],
        image: "/skills/special-skill-rid1.jpg",
      },
      {
        name: "龍虎滅牙斬",
        requirement: "猛虎連撃破の使用回数が160回以上",
        trigger:
          "敵のHPが2000+猛虎連撃破の使用回数の以下になったとき、猛虎連撃破ヒット時に再び特技ボタンで猛虎連撃破を発動させる",
        description:
          "発動条件が難しい秘奥義。HPが一定以下の敵にとどめを刺す秘奥義で複数の敵に対して使用できます。猛虎連撃破を9999回使用していればHPが11999以下になった敵で発動可能です。",
        tp: 20,
        element: ["normal"],
        image: "/skills/special-skill-rid2.jpg",
      },
      {
        name: "風塵封縛殺",
        requirement: "風刃縛封の使用回数が160回以上",
        trigger:
          "風耐性50以下の敵のHPが20000以下になったとき、風刃縛封ヒット時に再び特技ボタンで風刃縛封を発動させる（敵が1体の場合のみ発動）",
        description:
          "風塵封縛殺はラスト1体の敵を秘奥義でとどめを刺すという目的で使います。敵が1体だけの状態かつHPが20000以下で、風刃縛封の特技ボタンを連打することで発動させることができます。",
        tp: 24,
        element: ["wind"],
        image: "/skills/special-skill-rid3.jpg",
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
          "ファラの一番使い勝手のよい秘奥義。とにかくダメージが高く、敵を巻き込む範囲が大きい強力な秘奥義ですが制限なしで戦闘中に何度でも利用できます。",
        requirement:
          "獅子戦吼の使用回数が280回以上、殺劇舞荒拳の使用回数が30回以上",
        trigger: "獅子戦吼ヒット時に再び特技ボタンで獅子戦吼を発動させる",
        tp: 50,
        element: ["normal"],
        image: "/skills/special-skill-farth1.jpg",
      },
      {
        name: "火龍炎舞",
        description: (
          <>
            <p>火龍炎舞は特殊な秘奥義のため別ページにて解説しています。</p>
            <GuideList
              items={[{ title: "火龍炎舞", href: "/deeps/flame-dance" }]}
            />
          </>
        ),
        requirement: "点穴縛態の習得",
        trigger: "点穴縛態ヒット後にファラ単独で4連携攻撃をする",
        tp: 0,
        element: ["fire"],
        image: "/skills/special-skill-farth2.jpg",
      },
    ],
  };

  const ridList = skills.rid.map((item, index) => {
    const Image =
      item.image === "" ? null : <ResponsiveImage src={item.image} />;
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
        {Image}
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
    const Image =
      item.image === "" ? null : <ResponsiveImage src={item.image} />;
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
        {Image}
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

  return (
    <Main title={title}>
      <article>
<PageSummary>
        <div className="mb-2">
          <p>
            リッドとファラが使える秘奥義の条件や発動方法、特徴をまとめています
          </p>
        </div>
      </PageSummary>
      {/* 
      <section className="mb-12">
        <SectionTitle type="data">おすすめの特技</SectionTitle>
        <div className="advice">
          <p>準備中</p>
        </div>
      </section> */}

      <Section>
        <SectionTitle type="skill">リッドの秘奥義一覧</SectionTitle>
        {/* <div className="mb-8">
          <p>
            リッドの秘奥義でダメージを与えるために積極的に使うのは「緋凰絶炎衝」です。
            他の技も使い所
          </p>
        </div> */}
        {ridList}
      </Section>

      <Section>
        <SectionTitle type="skill">ファラの秘奥義一覧</SectionTitle>
        {farthList}
      </Section>
      {/* <section className="mb-12">
        <SectionTitle type="skill">ファラの秘奥義一覧</SectionTitle>
        {farthList}
      </section> */}
    </article>
    </Main>
  );
}
