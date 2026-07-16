"use client";

import {
  LuTable,
  LuZap,
  LuTarget,
  LuAward,
  LuHexagon,
  LuBookType,
  LuLink2,
  LuMapPin,
} from "react-icons/lu";
import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { TbSquareChevronDownFilled } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { recipeTypeMap, recipeWorldMap } from "@/constants";
import StarRating from "@/components/StarRating";
import { LuChefHat, LuMap, LuBeef, LuGem } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { RecipeItems, Recipes, LocationRecipes } from "@/lib/db";
import RoundedItem from "@/components/RoundedItem";

interface RunePropertyListProps {
  recipes: Recipes[];
  recipeItems: RecipeItems[];
  locationRecipes: LocationRecipes[];
}

export const RecipePropertyList: React.FC<RunePropertyListProps> = ({
  recipes,
  recipeItems,
  locationRecipes,
}) => {
  const [result, setResult] = useState(recipes);
  // 配列をループして表示する設計にします
  return (
    <>
      {result.map((recipe, index) => {
        // 必要アイテムを抽出
        const useItems = recipeItems
          .filter((item) => item.recipeId === recipe.id)
          .map((item, index) => (
            <li key={index}>
              <a
                href={`/systems/item/${item.itemId}`}
                className="px-2 py-1 bg-white hover:bg-blue-100 border border-gray-300 rounded-md text-sm text-gray-700 transition-colors"
              >
                {item.ItemName}
              </a>
            </li>
          ));

        // 獲得場所を抽出
        const location = locationRecipes.find(
          (item) => item.recipeId == recipe.id,
        );

        const properties = [
          {
            label: <>種別</>,
            value: recipeTypeMap[recipe.type],
          },
          {
            label: <>世界</>,
            value: recipeWorldMap[recipe.world],
          },
          {
            label: <>食材</>,
            value: <ul className="pt-1 flex flex-wrap gap-2">{useItems}</ul>,
          },
          {
            label: <>ワンダーシェフ</>,
            value:
              location === undefined ? (
                "-"
              ) : (
                <>
                  <strong className="flex items-center">
                    <LuMapPin className="text-red-600 mr-1" />
                    {location.locationName}
                  </strong>
                  <span className="font-normal">{location.remarks}</span>
                </>
              ),
          },
        ];
        return (
          <div
            key={index}
            className="mb-4 font-bold border border-slate-300 rounded-lg p-3"
          >
            <h3 className="text-[1rem]">{recipe.name}</h3>
            <RoundedItem title="料理の効果" className="mb-2">
              {recipe.effect}
            </RoundedItem>
            <div className="grid grid-cols-2 gap-2">
              {properties.map((item, index) => (
                <RoundedItem title={item.label} key={index}>
                  {item.value}
                </RoundedItem>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecipePropertyList;
