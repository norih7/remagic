"use client";
import styles from "./styles.module.css";
import { LuGift } from "react-icons/lu";

type Item = {
  locationId: number;
  itemId: number;
  itemName: string;
  itemType: string;
  remarks: string;
};
type Props = {
  data: Item[];
  locationIds: number[];
};

export default function ChartList(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((item, index) =>
    item.itemType === "money" ? (
      <li
        key={index}
        className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 transition-colors text-sm"
      >
        <strong>{item.itemName}</strong>
        <span>{item.remarks}</span>
      </li>
    ) : (
      <li key={index} className="bg-slate-50 border border-sky-200 rounded-md">
        <a href={`/systems/item/${item.itemId}`} className="block px-3 py-2">
          <strong>{item.itemName}</strong>
          <span>{item.remarks}</span>
        </a>
      </li>
    ),
  );
  const Display =
    result.length === 0 ? (
      <p className="pt-2">なし</p>
    ) : (
      // <ul
      //   className={`${styles.list} grid grid-cols-1 md:grid-cols-2 gap-3 mt-3`}
      // >
      <ul
        className={`${styles.list} grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 transition-colors text-sm`}
      >
        {List}
      </ul>
    );
  return (
    <div
      className={`${styles.container} mb-4 border border-gray-300 rounded-lg p-3 md:p-3 bg-white`}
    >
      <h3 className="pb-1 flex items-center">
        <LuGift size={18} className="mr-1" />
        アイテム
      </h3>
      {Display}
    </div>
  );
}
