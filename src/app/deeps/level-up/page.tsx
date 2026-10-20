import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import Section from "@/components/Section";
import CardList from "@/components/CardLIst";
import ResponsiveImage from "@/components/ResponsiveImage";
import GifPlayer from "@/components/GifPlayer";
import Main from "@/components/SiteLayout/Main";
import EventCondition from "@/components/EventCondition";
import RoundedInlineList from "@/components/RoundedInlineList";
import StarRating from "@/components/StarRating";

export const dynamic = "force-static";

const pageKey = "level-up";
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
          エターニアのレベル上げに関する情報をまとめます。
        </PageSummary>

        <Section>
          {/* <SectionTitle>レベルアップ</SectionTitle>
          <p>-</p> */}
          <div className="mb-8">
            <Information title="TIPS: デモンズシールとクローナシンボルの増上効果">
              デモンズシールは経験値を2倍にしてくれる反面、デメリットで様々なデメリット効果が付与されますが、クローナシンボルを同時に装備すると経験値2倍だけのメリットだけ享受できます。（クローナシンボルは異常状態を全て無効化する）デモンズシールの入手がラストランジョンのシゼル城で、終盤での活用となりますがぜひ覚えておいてください。
            </Information>
          </div>
        </Section>

        <Section>
          <SectionTitle>風刃縛封による無限コンボ</SectionTitle>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <RoundedInlineList title="推奨度">
                <StarRating rating={5} />
              </RoundedInlineList>
              <RoundedInlineList title="1回の経験値">
                最大80,000
              </RoundedInlineList>
            </div>
            <RoundedInlineList title="条件">
              リッドが風刃縛封を習得、チャットがパラライボールを習得（ストーリー後半）
            </RoundedInlineList>
          </div>
          <ResponsiveImage src="/deeps/level-up-wind-dust.jpg" />
          <div className="mb-8">
            <h3>概要</h3>
            <p>
              麻痺状態の敵に風刃縛封を使うと気絶状態が継続する仕様を使ったコンボ。400HITでボーナス上限の8万経験値となり、安定したコンボを組めますが1回あたり10〜15分ほどかかるのが少しネック。
            </p>
          </div>
          <div className="mb-8">
            <h3>詳細と手順</h3>
            <div className="mb-4">
              <CardList
                list={[
                  "1. 地上の敵を麻痺させる",
                  "2. 麻痺させた敵だけ残して、それ以外を倒す",
                  "3. ショートカットに登録した風刃縛封を発動（初回）",
                  "4. 敵が気絶したら1、2秒待ってから再度ショートカットの風刃縛封を発動",
                  "5. 以降ショートカットボタンを押したままにしてコンボループ",
                  "6. TPが足りなくなったらパイングミなどを使って回復",
                ]}
              />
            </div>
            <RoundedItem title="麻痺の方法" className="mb-4">
              <p>
                習得が終盤となりますがチャットのパラライボールがおすすめ（飛空挺入手後以降）。もっと早くこのコンボをしたい場合は、ファラに「ヴェノム」を装備させて攻撃させましょう。
              </p>
              <GuideList
                items={[
                  {
                    title: "武器データ: ヴェノム",
                    href: "/systems/item/57",
                  },
                ]}
              />
            </RoundedItem>
            <RoundedItem title="コンボ開始までの参考動画">
              <GifPlayer
                src="/deeps/level-up-wind-dust.gif"
                alt="風刃縛封の無限コンボ"
              />
            </RoundedItem>
            <Information title="Tips">
              キャラクタの幸運をあげておくと麻痺が発生しやすくなります（詳細検証中）。
              <br />
              風刃縛封はショートカットで使う必要があります。コンボ途切れなく最短で技を発動でき、通常の×ボタンだと秘奥義が発動してしまうため。
            </Information>
          </div>
        </Section>

        <Section>
          <SectionTitle>ブルーアース</SectionTitle>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <RoundedInlineList title="推奨度">
                <StarRating rating={4} />
              </RoundedInlineList>
              <RoundedInlineList title="1回の経験値">100,000</RoundedInlineList>
            </div>
            <RoundedInlineList title="条件">
              マクスウェル、ゼクンドゥス契約済みほか複数の条件（ストーリー終盤）
            </RoundedInlineList>
          </div>
          <div className="mb-4">
            <h3>概要</h3>
            <p>
              隠し召喚術「ブルー・アース」を利用したレベル上げ。発動条件は非常に難しいですが、それ以上に経験値を10万得られて効率も良いためおすすめ度は5にしています。※ブースト機能による獲得経験値アップ対象外なのは注意。
            </p>
          </div>
          <div className="mb-4">
            <h3>詳細と手順</h3>
            <GuideList
              items={[
                {
                  title: "ブルーアースの詳細はこちら",
                  href: "/deeps/blue-earth",
                },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>アイスニードル連発による無限コンボ</SectionTitle>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <RoundedInlineList title="推奨度">
                <StarRating rating={4} />
              </RoundedInlineList>
              <RoundedInlineList title="1回の経験値">80,000</RoundedInlineList>
            </div>
            <RoundedInlineList title="条件">
              ミスティシンボル獲得後（ストーリー中盤）
            </RoundedInlineList>
          </div>
          <ResponsiveImage src="/deeps/level-up-ice-needle.jpg" />
          <div className="mb-4">
            <h3>概要</h3>
            <p>
              アイスニードルなどの下級晶霊術を連発させることで無限コンボができるテクニック。メルディを操作キャラにして特殊操作をすることで可能となります。無限コンボできる敵がほぼアイスタイガーだけで、ボタン連打が大変なので周回は難しいです。
            </p>
          </div>
          {/* xオクトスライミー xキャニバラスプラント ?クラーケン ?クレイゴーレム xデュエリスト */}

          <div className="mb-8">
            <h3>詳細と手順</h3>
            <div className="mb-4">
              <CardList
                list={[
                  "1. 号令で「まもりをかためろ」を使い、仲間が攻撃しないようにする",
                  "2. アイスタイガーだけ残し、それ以外の敵を倒す",
                  "3. ジャンプ開始と同時にアイスニードルのショートカット実行（「L1 + ⚪︎」など）",
                  "4. ⚪︎ボタンを押したまま、着地したらL1ボタンを連打してコンボ開始",
                ]}
              />
            </div>
            <RoundedItem title="コンボ開始までの参考動画">
              <GifPlayer
                src="/deeps/level-up-ice-needle.gif"
                alt="アイスニードルの無限コンボ"
              />
            </RoundedItem>
            <Information type="warning" title="コンボのコツ">
              アイスニードルが途切れることないように連打が必要です。
              <strong>⚪ボタンを押したまま、L1ボタンだけ連打する</strong>
              という点がコンボを繋げるコツです。左指が疲れるので力を入れすぎないように連打していきましょう。
            </Information>
          </div>
        </Section>

        <Section>
          <SectionTitle>リマスター版によるオート戦闘</SectionTitle>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <RoundedInlineList title="推奨度">
                <StarRating rating={5} />
              </RoundedInlineList>
              <RoundedInlineList title="1回の経験値">
                10,000ほど
              </RoundedInlineList>
            </div>
            <RoundedInlineList title="条件">-</RoundedInlineList>
          </div>
          <div className="mb-4">
            <h3>概要</h3>
            <p>
              リマスター版ではオート戦闘とブースト機能を組み合わせることでレベル上げが簡単にできます。おすすめのレベル上げ場所やTipsを紹介します。
            </p>
          </div>
          <div className="mb-4">
            <h3>おすすめ周回場所</h3>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="シゼル城">
                ブースト機能なしで2000〜3000。
              </RoundedItem>
              <RoundedItem title="ファロース教会地下">
                ブースト機能なしで1500〜3000。
              </RoundedItem>
            </RoundedContainer>
          </div>
        </Section>
      </article>
    </Main>
  );
}
