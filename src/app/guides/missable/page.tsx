import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import GuideList from "@/components/GuideList";
import { guideLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "missable";
const title = guideLinks[pageKey].title;
// const description = guideLinks[pageKey].seoDesc;
// const canonical = guideLinks[pageKey].path;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };

export const metadata = {
  title,
  description: "",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          ストーリーを進めると発生しなくなるイベントや、ボス戦の前に回収しておきたいアイテムをまとめています。取り逃しを避けたい場合は、各エリアを出る前に確認してください。
        </p>
        <Information type="warning" title="エターニアの取り逃し要素">
          取り逃がし要素には称号や特殊アイテムの入手があります。取り逃がしがあっても称号やアイテム図鑑のコンプリートができないという程度で致命的ではありません。称号やアイテムの収集を楽しみたい方は、各エリアを出る前に確認しておくことをおすすめします。
        </Information>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>レンズ</SectionTitle>
        <p>
          レンズは町やダンジョンで入手でき、60枚集めるとシャンバールまたはティンシアのイレーヌから最後の報酬としてリッドの称号「レンズハンター」をもらえます。通常のレンズは後から回収できますが、ジイニのオークション会場にあるレンズだけは取り逃しに注意が必要です。
        </p>
        <div className="mb-8">
          <h3>ジイニのレンズ</h3>
          <p>
            王都インフェリアの闘技場で「王国一決定戦」に優勝すると、ジイニのカジノにあるレンズを入手できなくなります（調べても入手できなくなる）。闘技場に挑戦する前に、ジイニへ立ち寄ってレンズを回収しておきましょう。
          </p>
          <Information title="闘技場に挑戦する前に">
            ジイニのレンズを先に入手しておけば、ほかのレンズは後から集めても問題ありません。
          </Information>
          <GuideList
            items={[{ title: "レンズ収集", href: "/subevents/lens" }]}
          />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>カトリーヌの恋愛</SectionTitle>
        <p>
          カトリーヌに全6回遭遇すると、ファラの称号「あいのネゴシエーター」を入手できます。ミンツ、モルル、インフェリア港、バロール、シャンバール、レグルス道場の順にイベントを確認しましょう。
        </p>
        <div className="mb-8">
          <h3>セレスティアへ渡る前に全6回を確認</h3>
          <p>
            各イベントには発生期間があり、次のストーリー段階へ進むと前の場所では発生しなくなります。特に最後のレグルス道場のイベントは、火晶霊の谷到着後からセレスティア突入前までが発生期間です。
          </p>
          <Information title="称号を狙う場合">
            一度セレスティアへ渡るとカトリーヌのイベントは発生しません。イベントを見た回数によって結末が変わるため、各町へ到着したら寄り道して確認しましょう。
          </Information>
          <GuideList
            items={[{ title: "カトリーヌの恋愛", href: "/subevents/catarine" }]}
          />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>ベッポのかくれんぼ</SectionTitle>
        <p>
          バロールで発生するベッポとのかくれんぼでは、ルーンボトルを入手できます。ストーリー後半にもう一度訪れると売却専用アイテムの「ドエニスのポプリ」ももらえるため、セレスティアへ渡る前にイベントを終わらせておきましょう。ドエニスのポプリはジイニのオークションで高値がつきやすいアイテムです。
        </p>
        <div className="mb-8">
          <h3>発生期限</h3>
          <p>
            レイス加入後からセレスティア突入前までが発生期間です。セレスティアへ渡るとベッポとのかくれんぼは発生しなくなり、ドエニスのポプリも入手できません。
          </p>
          <Information title="ラストチャンス">
            霊峰ファロースでファラと合流した直後は、バロールへ戻れる最後の機会です。できればレイス加入後、バロール到着時に先に済ませておきましょう。
          </Information>
          <GuideList
            items={[{ title: "ベッポのかくれんぼ", href: "/subevents/beppo" }]}
          />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>沈没船のセイレーンのアイテム盗み</SectionTitle>
        <p>
          沈没船のボス「セイレーン」から、チャットの特技「ローバーアイテム」でアクセサリ「みずぐも」を盗めます。みずぐもは水属性ダメージを50%軽減するアイテム。チャットの小屋の宝箱から1つ入手できますが、2個目が欲しい場合はセイレーンを狙いましょう。
        </p>
        <div className="mb-8">
          <h3>セイレーン戦の前に準備</h3>
          <p>
            セイレーンに勝利すると戦闘へ戻れないため、戦闘開始前にセーブしておくのがおすすめです。チャットをパーティに入れ、ローバーアイテムでみずぐもを盗んでから撃破しましょう。
          </p>
          <Information title="盗み忘れに注意">
            みずぐもは後にチャットの小屋でも入手できますが、沈没船での入手機会はセイレーン戦の1回だけです。盗みを試す場合は、セイレーンを倒す前に確認してください。
          </Information>
          <GuideList
            items={[{ title: "沈没船", href: "/extras/sunken-ship" }]}
          />
        </div>
      </section>
    </article>
  );
}
