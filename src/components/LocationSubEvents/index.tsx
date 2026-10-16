"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { LuScroll } from "react-icons/lu";
import TimeLimitIcon from "@/components/Icons/TimeLimitIcon";
import SkillIcon from "@/components/Icons/SkillIcon";

type Subevent = {
  locationId: number;
  eventName: string;
  eventPath?: string;
  remarks: string;
  type: string;
};
type Props = {
  data: Subevent[];
  locationIds: number[];
};

export default function ChartList(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((item, index) => {
    const icon = item.type === "time-limit" ? <TimeLimitIcon /> : "";
    return item.eventPath === "" ? (
      <li
        key={index}
        className="bg-slate-50 border border-sky-200 rounded-md px-3 py-2 text-gray-500"
      >
        <strong>
          {icon}
          {item.eventName}
        </strong>
        <span>{item.remarks}</span>
      </li>
    ) : (
      <li key={index} className="bg-slate-50 border border-sky-200 rounded-md">
        <a href={item.eventPath} className="block px-3 py-2">
          <strong>
            {icon}
            {item.eventName}
          </strong>
          <span>{item.remarks}</span>
        </a>
      </li>
    );
  });
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
      <h3 className="pb-1 flex items-center !text-sm">
        <LuScroll size={18} className="mr-1" />
        サブイベント
      </h3>
      {Display}
    </div>
  );
}
