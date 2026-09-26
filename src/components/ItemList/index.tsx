import { Item } from "@/lib/db";
import { elementMap } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedInlineList from "@/components/RoundedInlineList";
import RoundedItem from "@/components/RoundedItem";
import Tag from "@/components/Tag";
import Link from "next/link";
import Elements from "@/components/Elements";

type Props = {
  data: Item[];
};

const createTagList = (item: Item) => {
  const result = [];
  const { isBuy, isDrop, isTreasure, isEvent } = item;
  if (isBuy) result.push("ショップ購入");
  if (isDrop) result.push("ドロップ");
  if (isTreasure) result.push("宝箱");
  if (isEvent) result.push("イベント入手");
  if (result.length === 0) result.push("その他");
  return result;
};

const ItemList = (props: Props) => {
  const { data } = props;
  const sort = data.sort((a, b) => Number(a.sell) - Number(b.sell));
  return sort.map((item, index) => {
    const { id, name, effect, isBuy, isDrop, special, type } = item;
    const element = (item.element as string) === "" ? "normal" : item.element;
    const shopBuy = isBuy ? "購入可能" : "宝箱から入手";
    const tagList = createTagList(item);
    const specialText = special === "" ? "" : <div>特殊: {special}</div>;
    const elementList = element
      .replace(/\s+/g, "")
      .split(",") as (keyof typeof elementMap)[];

    return (
      <Link href={`/systems/item/${id}`} key={index} className="group block">
        <RoundedContainer className="">
          <div className="flex">
            <h3 className="text-base font-bold flex-1">{name}</h3>
            <div>
              <span
                className="inline-flex items-center gap-1 rounded-xl bg-slate-200 px-3 py-1
                   text-xs font-bold text-slate-400 transition
                   group-hover:bg-blue-500 group-hover:text-white"
              >
                詳細を見る
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-2">
            <RoundedInlineList title="入手">
              <div className="">{tagList.join("/")}</div>
            </RoundedInlineList>
            <Elements list={elementList} />
          </div>

          <RoundedItem title="効果/説明">
            <div className="flex py-1">
              <div className="flex-1">
                {effect}
                {specialText}
              </div>
            </div>
          </RoundedItem>
        </RoundedContainer>
      </Link>
    );
  });
};

export default ItemList;
