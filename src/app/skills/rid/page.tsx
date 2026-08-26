import SetPageTitle from "@/components/SetPageTitle";
import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";
import Information from "@/components/Information";
import { skillLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "rid";
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
  const skills = [
    {
      name: "魔神剣",
      ruby: "まじんけん",
      description:
        "前方に真空の波を飛ばす飛び道具スキル。敵の詠唱を遠くから妨害したい場面で非常に重宝します。",
      remarks: "派生先: 魔神剣・双牙、魔神千裂破",
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
        "雷を纏った鋭い突きを繰り出す技。突きがクリーンヒットすると追加で雷属性の電撃ダメージが発生します。",
      remarks: "派生先: 風雷神剣、雷神双破斬",
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
        "上段と下段を素早く切り払う2段攻撃。無駄のないキビキビとしたモーションで、ゲーム終盤まで長く頼れる特技です。",
      remarks: "派生先: 虎牙連斬、雷神双破斬",
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
        "目にも留まらぬ速さで最大5ヒットの連続突きをお見舞いします。武器自体の命中ステータスが低いとヒット数が減るので注意しましょう。",
      remarks: "派生先: 秋沙雨、魔神千裂破、空破絶掌撃",
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
        "身体を回転させながら周囲を薙ぎ払う技。敵の裏に回り込みたいときのポジショニング調整にも向いています。使用回数が100回を超えるとジャンプ中にも発動可能になり、戦術の幅がぐっと広がります。",
      remarks: "派生先: 真空裂斬、翔雨裂空撃",
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
        "雷神剣の性能をさらに高めた強化版。使い勝手自体は元と大きく変わりませんが、のちに強力な「鳳凰天駆」を覚えるために数多くの使用回数が必要となります。初段は風属性、追撃の電撃は雷属性を帯びます。習得には規定のレベルに加え、「雷神剣」を50回以上使うことが条件となります。",
      remarks: "派生先: 空破絶掌撃",
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
        "魔神剣をタイミングよく連続で2発放ちます。当たり判定の距離が限定されるものの、リズムをずらした素早い2連撃はなかなかの使い勝手。習得には規定レベルと「魔神剣」を48回以上使用していることが求められます。",
      remarks: "派生先: 魔神連牙斬",
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
        "虎牙破斬をベースにパワーアップさせた優秀な攻撃。従来の虎牙破斬からこちらへ切り替えるプレイヤーが多い定番の技です。習得にはレベル条件のほかに「虎牙破斬」を150回以上使っている必要があります。",
      remarks: "派生先: 雷神双破斬、猛虎連撃破",
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
        "最大11ヒットにも及ぶ怒涛の連続突きを叩き込みます。最後の一撃で相手をカチ上げるため、地上コンボに組み込む際は少しタイミングの調整が必要です。習得にはレベル条件と「散沙雨」の130回以上の使用実績が必要です。",
      remarks: "派生先: 翔雨裂空撃",
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
        "雷神剣と虎牙破斬の長所を掛け合わせた奥義。習得条件として、レベルを満たしているうえに「雷神剣」と「虎牙破斬」をそれぞれ16回以上使っていることが必要です。",
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
        "魔神剣の飛び道具と散沙雨の連続突撃を組み合わせた奥義。習得には規定レベルに加え、「魔神剣」と「散沙雨」の両方をそれぞれ24回以上使用している必要があります。",
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
        "魔神剣の連射性能を高め、4連続で途切れなく放ちます。習得にはレベルのほかに、「魔神剣」を60回以上、「魔神剣双牙」を50回以上使用していることが条件となります。",
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
        "前方に強力な衝撃波の突きを放つ重い一撃。体躯の大きなボス級の敵などもまとめて巻き込めるため、非常に取り回しが良いです。習得にはレベル条件と、「雷神剣」「散沙雨」のそれぞれ70回以上の使用実績が必要です。",
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
        "光のオーラを纏いながら敵集団を巻き込んで突進する技。光属性を帯びており、キャラの命中ステータスがしっかり育っていれば安定した活躍を見せます。",
      remarks: "派生先: 閃空翔裂破",
      requirement: "斬Lv9/突Lv16",
      tp: 10,
      hit: 8,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "閃空双破斬",
      ruby: "せんくうそうはざん",
      description: "閃空裂破と虎牙破斬をクロスオーバーさせた高威力の奥義。",
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
        "裂空斬と秋沙雨を融合させたダイナミックな奥義。理論上は最大19ヒットを叩き出せますが、全段クリーンヒットさせるには高いプレイヤースキルが求められます。習得にはレベル条件のほか、「裂空斬」80回以上、「秋沙雨」120回以上の使い込みが必要です。",
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
      description: "閃空裂破の性能を極限まで引き上げた上位の派生攻撃。",
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
        "裂空斬をスピードアップ＆強化した発展技。風属性の追加効果を持ち、全体的なモーション速度がスピーディになっています。",
      remarks: "派生先: 翔雨裂空撃",
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
        "気合と共に大きく飛び上がり、燃え盛る炎を纏って敵陣へ突撃する必殺技。テイルズ オブ エターニアにおいて最も実用性が高く、コンボの締めや手軽なダメージソースとして猛威を振るいます。習得にはレベルのほかに、「風雷神剣」200回以上、「空破絶掌撃」150回以上の使用回数が必須です。",
      requirement: "斬Lv22/突Lv24",
      requirement2: "風雷神剣200回/空破絶掌撃150回",
      tp: 40,
      hit: 9,
      element: ["fire"],
      type: "奥義",
    },
    {
      name: "猛虎連撃破",
      ruby: "もうこれんげきは",
      description:
        "上下の連続斬りを絶え間なく繰り出すラッシュ攻撃。敵の耐性が硬すぎなければ、一方的にハメ続けるような立ち回りが可能です。習得にはレベル条件と「虎牙破斬」を200回以上使っていることが求められます。",
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
      description: "鋭い風の刃でターゲットを宙高く打ち上げる奥義。",
      requirement: "斬Lv30/突Lv30",
      tp: 40,
      hit: 2,
      element: ["wind"],
      type: "奥義",
    },
    {
      name: "極光壁",
      ruby: "きょっこうへき",
      description:
        "戦闘中のピンチ（HP低下で赤字状態）のときに、○・×・△ボタンを同時に押し込むことで発動する特殊な奥義。",
      requirement: "ストーリー進行で習得",
      tp: 25,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "極光剣",
      ruby: "きょっこうけん",
      description:
        "「極光壁」の展開中に追加入力として○ボタンを押すことで連動発動する強力な奥義。",
      requirement: "ストーリー進行で習得",
      tp: 50,
      element: ["light"],
      type: "奥義",
    },
    {
      name: "極光波",
      ruby: "きょっこうは",
      description:
        "ラスボス戦でのみ使用する決戦用の奥義。相手が「エターナルファイナリティ」を詠唱した際に、タイミングを合わせて○・×・△ボタンを同時押しすると発動できます。",
      requirement: "ストーリー進行で習得",
      tp: 25,
      element: ["light"],
      type: "奥義",
    },
  ] as Skill[];

  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <div className="mb-2">
          <p>
            主人公リッドが習得するすべての特技と奥義の一覧ページです。スキルの前提となる「斬レベル」や「突レベル」の仕組みの解説は専用の別ページをご用意していますのでそちらをご確認ください。
          </p>
        </div>
        <GuideList
          items={[
            {
              title: "斬レベル・突レベルシステムの詳細解説",
              href: "/systems/skill",
            },
          ]}
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
