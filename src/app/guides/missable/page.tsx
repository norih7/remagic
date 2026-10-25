import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import GuideList from "@/components/GuideList";
import { guideLinks } from "@/constants";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import ResponsiveImage from "@/components/ResponsiveImage";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import TableOfContents from "@/components/TableOfContents";
import Title from "@/components/Title";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "missable";
const title = guideLinks[pageKey].title;
const description = guideLinks[pageKey].seoDesc;
const canonical = guideLinks[pageKey].path;
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
        <Section>
          <Title>エターニアの取り逃し要素</Title>
          ストーリーを進めると発生しなくなるイベントや、ボス戦の前に回収しておきたいアイテムを解説します。
          取り逃がし要素には称号や特殊アイテムの入手があります。取り逃がしがあっても称号やアイテム図鑑のコンプリートができないという程度で致命的ではありません。称号やアイテムの収集を楽しみたい方は、このページの情報を参考にしてください。
        </Section>

        <Section>
          <TableOfContents />
        </Section>

        <Section>
          <SectionTitle>消失するレンズ</SectionTitle>
          <ResponsiveImage
            src="/subevents/lens-location53.jpg"
            alt="無くなる可能性があるジイニのオークション会場にあるレンズ"
          />
          <Information type="warning" title="リマスター版では発生しない">
            <strong>
              （2026/10/19）リマスター版ではこの事象は修正されています。ただし王国一決定戦の薬草報酬が丸ごと削除されています。
            </strong>
          </Information>
          <div className="mb-8">
            <p>
              レンズは町やダンジョンで入手でき、60枚集めるとシャンバールまたはティンシアのイレーヌから最後の報酬としてリッドの称号「レンズハンター」をもらえます。通常のレンズは後から回収できますが、ジイニのオークション会場にあるレンズだけは取り逃しに注意が必要です。
            </p>
          </div>
          <div className="mb-8">
            <h3>攻略順に注意</h3>
            <p>
              王都インフェリアの闘技場で「王国一決定戦」に優勝すると、ジイニのカジノにあるレンズを入手できなくなります（調べても入手できなくなる）。闘技場に挑戦する前に、ジイニへ立ち寄ってレンズを回収しておきましょう。
            </p>
            <Information
              type="warning"
              title="ジイニのレンズを先に入手する場合"
            >
              <p>
                <strong>
                  リマスター版は順番に関係なく王国一決定戦の薬草が入手できなくなっています。
                </strong>
              </p>
              逆に先にジイニのカジノでレンズを入手すると王国一決定戦の初回報酬（レッドセージ、レッドセボリー）が入手できなくなります。もしもレンズ60枚全て集めた場合のリッドの称号に興味がなく、薬草を優先したい場合はジイニのカジノでレンズを入手せずに闘技場に挑戦するのも選択肢です。
            </Information>
            <GuideList
              items={[
                { title: "レンズ一覧", href: "/subevents/lens" },
                { title: "闘技場: 王国一決定戦", href: "/subevents/coliseum" },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>カトリーヌの恋愛</SectionTitle>
          <ResponsiveImage
            src="/subevents/catarine-end.jpg"
            alt="カトリーヌの恋愛イベントで獲得する称号"
          />
          <div className="mb-8">
            <p>
              カトリーヌに全6回遭遇すると、ファラの称号「あいのネゴシエーター」を入手できます。ミンツ、モルル、インフェリア港、バロール、シャンバール、レグルス道場の順にイベントを確認しましょう。
            </p>
          </div>
          <div className="mb-8">
            <h3>セレスティアへ渡る前に全6回を確認</h3>
            <p>
              各イベントには発生期間があり、次のストーリー段階へ進むと前の場所では発生せずタイミングがシビアです。特に最後のレグルス道場のイベントは、火晶霊の谷到着後からセレスティア突入前までが発生期間です。
            </p>
            <Information title="称号を狙う場合">
              一度セレスティアへ渡るとカトリーヌのイベントは発生しません。イベントを見た回数によって結末が変わるため、各町へ到着したら寄り道して確認しましょう。ただしこのイベントで得られるのはファラの称号だけなので、称号に興味がなければスルーでも問題ありません。
            </Information>
            <GuideList
              items={[
                { title: "カトリーヌの恋愛", href: "/subevents/catarine" },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>ベッポのかくれんぼ</SectionTitle>
          <ResponsiveImage
            src="/subevents/beppo-5.jpg"
            alt="ベッポのかくれんぼ"
          />
          <div className="mb-8">
            <p>
              バロールで発生するベッポとのかくれんぼでは貴重なルーンボトルを入手でき、ストーリー後半にもう一度訪れると売却専用アイテムの「ドエニスのポプリ」をもらえます。時限イベントなのでセレスティアへ渡る前にイベントを終わらせておきましょう。ドエニスのポプリはジイニのオークションで高値がつきやすいアイテムで、アイテム図鑑のコンプリートのためにここで入手する必要があります。
            </p>
          </div>
          <div className="mb-8">
            <h3>発生期限</h3>
            <p>
              レイス加入後からセレスティア突入前までが発生期間です。セレスティアへ渡るとベッポとのかくれんぼは発生しなくなり、ドエニスのポプリも入手できません。
            </p>
            <Information title="ラストチャンス">
              霊峰ファロースでファラと合流した直後は、バロールへ戻れる最後の機会です。できればレイス加入後、バロール到着時に先に済ませておきましょう。
            </Information>
            <GuideList
              items={[
                { title: "ベッポのかくれんぼ", href: "/subevents/beppo" },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>モンスター図鑑</SectionTitle>
          <div className="mb-8">
            <p>
              モンスター図鑑のコンプリートには敵のドロップアイテムとアイテム盗みが必要です。スペクタクルで調べるだけではなく、実際にアイテムを入手する必要があります。エターニアではボスを含め、戦闘回数が限られている敵がいるため図鑑コンプリートを目指す場合は根気強さが必要です。
            </p>
            <Information title="リマスター版のブースト機能">
              リマスター版ではブースト機能でアイテムの所持数を増やすことができます。「スペクタクルズが使いたい時にない！？」という状況にならないためにブースト機能で所持数を拡張しておくことを推奨します。
            </Information>
          </div>

          <div className="mb-8">
            <h3>見逃しやすい敵</h3>
            <RoundedContainer
              title="ジャングラー"
              className="pt-3 grid grid-cols-1 gap-3"
            >
              <RoundedItem title="概要">
                いざないの密林に登場するゾンビシンボルの「ジャングラー」は5回しか戦えません。図鑑コンプリートするためには5回の中で、すべてのアイテムをドロップさせる必要があります。
              </RoundedItem>
              <RoundedItem title="準備や攻略ポイント">
                <p>
                  戦闘開始前にセーブしておきましょう。オレンジグミとライフボトルの2つを20%で落とすので最後の1体では落とさなかったらロードして地道に頑張りましょう。
                </p>
                <GuideList
                  items={[
                    { title: "ジャングラー", href: "/systems/enemy/247" },
                  ]}
                />
              </RoundedItem>
            </RoundedContainer>
            <RoundedContainer
              title="シルエシカへい"
              className="pt-3 grid grid-cols-1 gap-3"
            >
              <RoundedItem title="概要">
                ティンシアのアジトへ到着後にイベントで戦闘となる敵です。8体登場しますが1戦限りなので図鑑コンプリートのためには準備が必要です。
              </RoundedItem>
              <RoundedItem title="準備や攻略ポイント">
                <p>
                  アジト行く前にセーブしておきましょう。アイテムも盗めるためチャットをパーティに入れておく必要があります。チャットは自動的に仲間になってくれずバンエルティア号の船内で話かけなけれいけないので要注意。アイテムは30%のアップルグミ、40%のパンヤめんのドロップを狙います。スマッシュマントを付けることを推奨します。2つのアイテムを同時に落とさない場合はロードして再挑戦しましょう。
                </p>
                <GuideList
                  items={[
                    { title: "ジャングラー", href: "/systems/enemy/247" },
                  ]}
                />
              </RoundedItem>
            </RoundedContainer>
            <RoundedContainer
              title="セイレーン"
              className="pt-3 grid grid-cols-1 gap-3"
            >
              <RoundedItem title="概要">
                沈没船のボス「セイレーン」から、チャットの特技「ローバーアイテム」でアクセサリ「みずぐも」を盗めます。みずぐもは水属性ダメージを50%軽減するアイテム。チャットの小屋の宝箱から1つ入手できますが、2個目が欲しい場合はセイレーンを狙いましょう。
              </RoundedItem>
              <RoundedItem title="準備や攻略ポイント">
                <p>
                  セイレーンに勝利すると戦闘へ戻れないため、戦闘開始前にセーブしておきましょう。チャットをパーティに入れ、ローバーアイテムでみずぐもを盗んでから撃破しましょう。盗める確率は100%なのでボスが強い以外は困る点はありません。
                </p>
                <GuideList
                  items={[{ title: "沈没船", href: "/extras/sunken-ship" }]}
                />
              </RoundedItem>
            </RoundedContainer>
            <p>
              その他の情報は順次追記していきます。マクスウェルは盗みが難しい。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>時限要素の称号</SectionTitle>
          <div className="mb-8">
            エターニアの称号は時限イベントや特殊なものが多く通常プレイでは見逃してしまいがちです。称号自体には効果はないため通常はスルーしても良いのですが、エターニアをコンプリートしたい方は取り返しがつかない要素となります。
          </div>
          <h3>時限要素の称号</h3>
          <RoundedContainer className="grid grid-cols-1 gap-3">
            <RoundedItem title="ファラの称号「あいのネゴシエーター」">
              <p>セレスティアへ渡る前に時限イベントをすべて見る必要あり</p>
              <GuideList
                items={[
                  { title: "カトリーヌの恋愛", href: "/subevents/catarine" },
                ]}
              />
            </RoundedItem>
            <RoundedItem title="リッドの称号「さんじゅつせいねん」 ">
              <p>セレスティアへ渡る前に算術勝負で1回勝つ必要あり</p>
              <GuideList
                items={[{ title: "算術勝負", href: "/subevents/arithmetic" }]}
              />
            </RoundedItem>
            <RoundedItem title="リッドの称号「さいそくのおとこ」">
              プレイ時間20時間以内にラストダンジョン「シゼル城」へ入る
            </RoundedItem>
            <RoundedItem title="ファラの称号「ストーリーテラー」">
              スキットを200個以上見る
            </RoundedItem>
            <RoundedItem title="キールの称号「ぼさぼさあたま」">
              アイメン到着時、図書館で徹夜した後にキールを操作キャラにして給水タンクのボンズに話かける。リマスター版だとキールを操作キャラにしなくても良くなっています。
            </RoundedItem>
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
