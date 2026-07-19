"use client";
import styles from "./styles.module.css";
import { LuCircle } from "react-icons/lu";

type Recipe = {
  locationId: number;
  remarks: string;
};
type Props = {
  data: Recipe[];
  locationIds: number[];
};

export default function LocationLenses(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((recipe, index) => (
    <li
      key={index}
      className="bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 transition-colors text-sm"
    >
      {index + 1}つ目<span>{recipe.remarks}</span>
    </li>
  ));
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
