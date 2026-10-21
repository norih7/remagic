import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import ResponsiveImage from "@/components/ResponsiveImage";
import Title from "@/components/Title";

export const dynamic = "force-static";

const pageKey = "herb";
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

export default async function HomePage() {
  return (
    <Main title={title}>
      <article>
        <PageSummary>
          敵のドロップやチャットの盗みで手に入るステータスアップ薬草の集め方を解説します。
        </PageSummary>

        <Section>
          <Title>ステータスアップ薬草集め</Title>
          <div className="mb-8">
            <p>
              「セージ」や「セボリー」などの薬草はステータスが上がる特殊アイテムです。Lvアップによるステータス向上で足りない部分を補うのに薬草の使用は非常に強力です。薬草はドロップを狙えるので必要なときに使って問題ありません。
            </p>
          </div>
          <h3>薬草の種類と効果</h3>
          <div className="mb-8">
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="セージ/レッドセージ" className="mb-3">
                効果: HPを5%アップする
                <br />
                ※レッドセージは10%
              </RoundedItem>
              <RoundedItem title="セボリー/レッドセボリー" className="mb-3">
                効果: TPを5%アップする
                <br />
                ※レッドセボリーは10%
              </RoundedItem>
              <RoundedItem title="ラベンダー/レッドラベンダー" className="mb-3">
                効果: 力を1アップする
                <br />
                ※レッドラベンダーは2
                <br />
                効能: 特技などの物理ダメージがアップ
              </RoundedItem>
              <RoundedItem title="ベルベーヌ/レッドベルベーヌ" className="mb-3">
                効果: 回避を1アップする
                <br />
                ※レッドベルベーヌは2
                <br />
                効能: 敵の攻撃の自動防御確率がアップ
              </RoundedItem>
            </RoundedContainer>
            <Information type="warning" title="ステータス上限に注意">
              <p>
                ゲーム内でステータスパラメータは上限が設けられています。
                <br />
                「HP: 9999、TP: 999、力: 500、回避: 200」
                <br />
                この値を超える場合には薬草が使えないため目標を持って集めましょう。
              </p>
              <p>
                キャラクタごとに以下の特徴を持っており、Lv80を超えると上限に届いてくるキャラクターも出てきます。
              </p>
              <div className="grid grid-cols-2 gap-2">
                <RoundedItem title="HPが高いキャラ" white={true}>
                  リッド、フォッグ、ファラ
                </RoundedItem>
                <RoundedItem title="TPが高いキャラ" white={true}>
                  メルディ、キール
                </RoundedItem>
                <RoundedItem title="力が高いキャラ" white={true}>
                  リッド、ファラ、チャット、フォッグ
                </RoundedItem>
                <RoundedItem title="回避が高いキャラ" white={true}>
                  -
                </RoundedItem>
              </div>
            </Information>
            <Information title="Tips: セージとセボリーの効率的な使い方">
              セージとセボリーは最大HP/TPから5%アップします。「ブラックオニキス」「ムーンクリスタル」を装備し、パラメータを30%底上げしてから使うと効果を大きくできます。
            </Information>
          </div>

          <div className="mb-8">
            <div className="mb-3">
              <h3>集め方1: 敵からのドロップ</h3>
              <Tag>おすすめです</Tag>
            </div>
            <p>
              いくつかの敵はステータスアップ薬草を落とします。敵ごとのドロップ率は低めですが、繰り返し戦うことで確保できるので、育成用に連戦をしておくのが効率的です。
            </p>
            <p>
              また「スマッシュマント」を装備するとテクニカルスマッシュ発生時にアイテムドロップ率がアップします。アイテムドロップを狙うときは術キャラ（キール、メルディ）以外にスマッシュマントを装備させるようにしましょう。フリンジで晶霊術の特殊効果「+アイテムゲッター」も習得しておくことでさらにドロップ率はアップします。
            </p>
            <Information title="リマスター版のブースト機能でさらにドロップ率アップ">
              リマスター版のブースト機能には「アイテム入手確率2倍」があり薬草集めに最適です。リマスター版で薬草集めするときはこの機能のONを推奨します。
            </Information>
            <GuideList
              items={[
                {
                  title: "グリップソード探し（スマッシュマント入手）",
                  href: "/subevents/grip-sword",
                },
                {
                  title:
                    "ルーンボトル変化一覧（シーブスマントからのルーンボトル変化）",
                  href: "/systems/rune",
                },
                {
                  title: "晶霊術一覧（+アイテムゲッターのフリンジ条件）",
                  href: "/skills/magic",
                },
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>集め方2: 敵から盗む</h3>
            <p>
              チャットの特技「ローバーアイテム」を使えば、戦闘中に敵から薬草を盗めます。ドロップに頼るより安定して入手しやすいため、重要な薬草が落ちやすい敵を見つけたら、盗みのルートで集めるのがおすすめです。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>セージ集め</SectionTitle>
          <RoundedContainer>
            <div className="mb-3">
              <h3>闘技場の世界一決定戦の周回</h3>
              <Tag>後半おすすめ</Tag>
            </div>
            <RoundedItem title="概要" className="mb-3">
              闘技場のヘルカイトは「セージ」「レッドセージ」をドロップします。1周3〜5分ほどでレッドセージも狙えるため効率はかなり高いです。30分でセージが3個以上集まることも。1回戦目のウィザードからは副産物でセボリーのドロップも狙えます。
            </RoundedItem>
            <RoundedItem title="効率的な連戦">
              リッドに「アイスコフィン（氷属性武器）」や「せいりゅうとう（水属性武器）」、「スマッシュマント」を装備して挑みましょう。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <div className="mb-3">
              <h3>アックスビーク狩り</h3>
              <Tag>後半おすすめ</Tag>
            </div>
            <ResponsiveImage src="/deeps/herb-ax.jpg" />
            <RoundedItem title="概要" className="mb-3">
              アイフリードの墓周辺の<strong>フィールドの平地</strong>
              に出現するアックスビークはセージを1%の確率でドロップします。闘技場と比べて敵が弱めであり、アックスビークの出現率はかなり高いため周回効率はかなり高いです。こちらも30分で3個以上集まることも。
            </RoundedItem>
            <RoundedItem title="効率的な連戦">
              アックスビークが登場したときだけ戦い、それ以外は逃げましょう。スマッシュマント装備したリッドで、鳳凰天駆〜緋凰絶炎衝でノーダメージかつまとめて倒すとテクニカルスマッシュが20%ほどを稼げる場合もあります。テクニカルスマッシュはアイテムドロップ率もアップに繋がるので高得点を狙っていきましょう。
            </RoundedItem>
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>セボリー集め</SectionTitle>
          {/* <div className="mb-3">
          <GuideList
            items={[{ title: "セボリーの詳細", href: "/systems/item/75" }]}
          />
        </div> */}
          <RoundedContainer>
            <div className="mb-3">
              <h3>ジェントルマン狩り</h3>
              <Tag>中盤おすすめ</Tag>
            </div>
            <ResponsiveImage src="/deeps/herb-gentleman.jpg" />
            <RoundedItem title="概要" className="mb-3">
              ティンシア〜雷晶霊の遺跡にかけて
              <strong>フィールドマップの森</strong>
              で出現する「ジェントルマン」は1%でセボリーを落とし、5%でセボリーを盗めます。ストーリー中盤のティンシア到着後から可能です。ジェントルマンは確定で3体出現するため中盤の稼ぎとしては効率は良いです。
            </RoundedItem>
            <RoundedItem title="効率的な連戦">
              パーティに号令「まもりをかためろ」で待機させ、ショートカットでチャットのローバーアイテムで盗みチャレンジ。リッドには虎牙連斬、空破絶掌撃の連携でテクニカルスマッシュを稼ぎましょう。盗みとドロップ両方狙えますが、どちらか片方やるのでもいいです。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <div className="mb-3">
              <h3>トロール狩り</h3>
              <Tag>序盤おすすめ</Tag>
            </div>
            <ResponsiveImage src="/deeps/herb-troll.jpg" />
            <RoundedItem title="概要" className="mb-3">
              いざないの密林に出現する「トロール」は1%でセボリーを落とします。効率は高くないですがストーリー序盤で薬草集めが可能です。
            </RoundedItem>
            <RoundedItem title="効率的な連戦">
              いざないの密林を周回しましょう。トロールは確定3体出現しますが、遭遇率は体感的には低いため（10回中1回以下）ここでセボリー集めにこだわる必要はありません。またいざないの密林で出現する「サイズキャリアー」はリバースドールを10%で落とすのでセボリーと一緒に集めるがおすすめです。
            </RoundedItem>
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>ラベンダー集め</SectionTitle>
          <RoundedContainer>
            <div className="mb-3">
              <h3>デュエリスト狩り</h3>
              <Tag>終盤おすすめ</Tag>
            </div>
            {/* <ResponsiveImage src="/deeps/herb-troll.jpg" /> */}
            <RoundedItem title="概要" className="mb-3">
              レグルスの丘に出現する「デュエリスト」は1%の確率でラベンダーを落とし、20%の確率でラベンダーを盗めます。
            </RoundedItem>
            <RoundedItem title="効率的な連戦">
              レグルスの丘でデュエリストを周回しましょう。デュエリストは1体だけ出現し、20%で盗めることからチャットのローバーアイテムで盗むことに集中するのがおすすめです。
            </RoundedItem>
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>ベルベーヌ集め</SectionTitle>
          <RoundedContainer>
            <div className="mb-3">
              <h3>メガデス狩り</h3>
              <Tag>終盤おすすめ</Tag>
            </div>
            {/* <ResponsiveImage src="/deeps/herb-troll.jpg" /> */}
            <RoundedItem title="概要" className="mb-3">
              アイフリードの墓に出現する「メガデス」は3%の確率でベルベーヌを落とします。
            </RoundedItem>
            <RoundedItem title="効率的な連戦">
              アイフリードの墓でメガデスを周回しましょう。他の敵と比べてドロップ率は3%と少し高いため、スマッシュマントと+アイテムゲッターを準備してテクニカルスマッシュでドロップ率をアップさせましょう。
            </RoundedItem>
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
