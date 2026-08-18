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
  description:
    "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。ファラが習得するすべての特技や回復功を網羅。各種スキルの効果、属性、消費TP、ヒット数に加え、習得に必要な拳・蹴レベルや特定技の使用回数といった詳細な条件を一覧で紹介しています。",
};

export default async function HomePage() {
  const skills = [
    {
      name: "三散華",
      ruby: "さざんか",
      description:
        "連続の蹴り上げと足払いによる3連撃。ラッシュの締めくくりで標的を奥へと吹き飛ばします。動作中の隙がやや大きいため、相手の命中率が低い状況や硬い敵を相手にする際は注意が必要です。",
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
        "素早い拳のラッシュを打ち込む近接連打技。手数は多いものの拳による攻撃ゆえに攻撃範囲はやや狭めです。",
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
        "地表からふわりと飛び上がり、空中から鋭い蹴りを放ちます。非常に使い勝手が良く、モーションの途中でキャンセルして空中からのコンボへスムーズにつなげられる優秀な技です。",
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
        "空中から真下へ向かって鋭いかかと落としを叩き込みながら急降下します。発生がスピーディで取り回しやすく、地上から直接は発動できない空中専用の特技です。",
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
        "一瞬のタメを作ってから拳に気を纏わせ、敵を盛大に突き上げる風属性の技。ファラ自身が前方へ踏み込むため距離感を掴むのに少しコツが要りますが、空中コンボへの起点として大いに活躍します。",
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
        "空中専用の派生技。空から斜め前方へと急降下しながら、「三散華」のモーションによる蹴り上げ連続攻撃を浴びせます。",
      requirement: "拳Lv11/蹴Lv12",
      tp: 12,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "双撞掌底破",
      ruby: "ようどうしょうていは",
      description:
        "両手で強烈な掌底を同時に突き出し、近距離の相手を強かに打ち据える重い一撃。",
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
        "「飛燕連脚」をさらに昇華させた発展技。技の終わりに美しく華麗なムーンサルート（宙返りキック）の追撃が追加されています。習得にはレベル条件に加え、「飛燕連脚」を150回以上使用していることが必須です。",
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
      description:
        "「連牙弾」の性能をさらに高めた上位の連続拳撃。習得には「連牙弾」を150回以上使い込んでいる必要があります。",
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
        "高い機動力を誇るダイナミックな蹴り技。習得には規定レベルのほかに、「散華猛襲脚」と「飛燕連天脚」の双方をそれぞれ100回以上使用していることが条件となります。",
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
        "闘気を前方の敵に向けて一気に解き放つお馴染みの強力な奥義。習得条件として、「八葉連牙」を100回以上、「双撞掌底破」を160回以上使い込んでいることが求められます。",
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
        "無数の拳と蹴りで相手を圧倒し、最後は大爆発で締めくくるファラの最高峰奥義。習得にはレベル条件を満たした上で、「獅子戦吼」と「鷹爪落爆蹴」をそれぞれ120回以上使用していることが絶対条件となります。",
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
        "ストーリー進行中のイベント（モルル村での出来事）で自然と習得する気功術。味方単体のHPを優しく癒やします。",
      tp: 8,
      element: [],
      type: "回復",
    },
    {
      name: "解毒功",
      ruby: "げどくこう",
      description:
        "同じくモルルでのイベントで習得する気功スキル。仲間1人の厄介な毒状態をきれいに治療します。",
      tp: 8,
      element: [],
      type: "回復",
    },
    {
      name: "回生功",
      ruby: "かいせいこう",
      description:
        "物語の進行上（ファロース教会でのイベント）で習得する重要な回復術。戦闘不能に陥った仲間1人を復活させます。",
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
          格闘家ファラが習得するすべての特技、奥義、および回復功の一覧ページです。スキルの前提条件となる「拳レベル」や「蹴レベル」のシステム、秘奥義の詳細な仕組みについては専用の解説ページをご用意していますのでそちらをご参照ください。
        </p>
        <div className="mb-4">
          <GuideList
            items={[
              {
                title: "拳レベル・蹴レベルシステムの詳細解説",
                href: "/systems/skill",
              },
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
        <SectionTitle type="skill">ファラの特技一覧</SectionTitle>
        <SkillPropertyList skills={skills} />
      </section>
    </article>
  );
}
