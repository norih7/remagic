"use client";
import styles from "./styles.module.css";
import { LuCircle } from "react-icons/lu";
import Link from "next/link";
import LinkItem from "../LinkItem";

type Lenses = {
  locationId: number;
  remarks: string;
  lensId: number;
};
type Props = {
  data: Lenses[];
  locationIds: number[];
};

export default function LocationLenses(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((lens, index) => {
    const { remarks } = lens;
    const name = `${index + 1}つ目`;
    const href = `/subevents/lens?id=${lens.lensId}#detail`;
    return <LinkItem name={name} href={href} remarks={remarks} key={index} />;
  });
  const Display = List.length === 0 ? <p>なし</p> : List;
  return (
    <div
      className={`${styles.container} mb-4 border border-gray-300 rounded-lg p-3 md:p-3 bg-white`}
    >
      <h3 className="pb-1 flex items-center !text-sm">
        <LuCircle size={15} className="mr-1" />
        レンズ
      </h3>
      <ul
        className={`${styles.list} grid grid-cols-1 md:grid-cols-2 gap-3 mt-3`}
      >
        {Display}
      </ul>
    </div>
  );
}
