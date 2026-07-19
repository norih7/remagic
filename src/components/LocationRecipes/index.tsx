"use client";
import styles from "./styles.module.css";
import { LuChefHat } from "react-icons/lu";
import type { LocationRecipes } from "@/lib/db";

type Props = {
  data: LocationRecipes[];
  locationIds: number[];
};

export default function LocationRecipes(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((item, index) => (
    <li key={index} className="bg-slate-50 border border-sky-200 rounded-md">
      <a
        href={`/systems/recipe/?id=${item.recipeId}`}
        className="block px-3 py-2"
      >
        <strong>{item.recipeName}</strong>
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
      <h3 className="pb-1 flex items-center !text-sm">
        <LuChefHat size={22} className="pr-1" />
        レシピ
      </h3>
      {Display}
    </div>
  );
}
