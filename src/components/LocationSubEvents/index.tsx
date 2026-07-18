"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { LuScroll } from "react-icons/lu";

type Subevent = {
  locationId: number;
  eventName: string;
  eventPath: string;
  remarks: string;
};
type Props = {
  data: Subevent[];
  locationIds: number[];
};

export default function ChartList(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((item, index) => (
    <li key={index} className="bg-slate-50 border border-sky-200 rounded-md">
      <a href={item.eventPath} className="block px-3 py-2">
        <strong>{item.eventName}</strong>
        <span>{item.remarks}</span>
      </a>
    </li>
  ));
  const Display =
    result.length === 0 ? (
      <p className="pt-2">なし</p>
    ) : (
      <ul
        className={`${styles.list} grid grid-cols-1 md:grid-cols-2 gap-3 mt-3`}
      >
        {List}
      </ul>
    );
  return (
    <div
      className={`${styles.container} mb-4 border border-gray-300 rounded-lg p-3 md:p-3 bg-white`}
    >
      <h3 className="pb-1 flex items-center">
        <LuScroll size={18} className="mr-1" />
        サブイベント
      </h3>
      {Display}
    </div>
  );
}
