"use client";

import {
  LuTable,
  LuZap,
  LuTarget,
  LuAward,
  LuHexagon,
  LuBookType,
} from "react-icons/lu";
import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { TbSquareChevronDownFilled } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { recipeTypeMap, recipeWorldMap } from "@/constants";
import StarRating from "@/components/StarRating";
import { LuCornerDownRight } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { RecipeItems, Recipes, LocationRecipes } from "@/lib/db";

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
          .map((item) => item.ItemName)
          .join("、");

        // 獲得場所を抽出
        const location = locationRecipes.find(
          (item) => item.recipeId == recipe.id,
        );

        const properties = [
          {
            label: (
              <>
                <LuShoppingBag className="text-lime-600 mr-1" />
                種別
              </>
            ),
            value: recipeTypeMap[recipe.type],
          },
          {
            label: (
              <>
                <LuAward className="text-lime-600 mr-1" />
                世界
              </>
            ),
            value: recipeWorldMap[recipe.world],
          },
          {
            label: (
              <>
                <LuShoppingBag className="text-lime-600 mr-1" />
                食材
              </>
            ),
            value: useItems,
          },
          {
            label: (
              <>
                <LuShoppingBag className="text-lime-600 mr-1" />
                ワンダーシェフ
              </>
            ),
            value:
              location === undefined ? (
                "-"
              ) : (
                <>
                  {location.locationName}
                  <br />
                  {location.remarks}
                </>
              ),
          },
        ];

        // const descripion =
        //   rune.remarks === undefined ? (
        //     <p>{rune.description}</p>
        //   ) : (
        //     <>
        //       <p>{rune.remarks}</p>
        //       <p className="border-t border-gray-200 pt-2">{rune.remarks}</p>
        //     </>
        //   );
        return (
          <div key={index} className="mb-12">
            <h3>{recipe.name}</h3>
            <div className=" border-gray-300  rounded-lg font-bold">
              <div className="bg-slate-50 px-3 pt-2 mb-2 rounded-lg border border-slate-200">
                <div className="mb-2">
                  <div className="mb-1 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center">
                    効果と説明
                  </div>
                  {recipe.effect}
                </div>
                <div className="mb-2">
                  <div className="mb-1 pt-2 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center border-t border-gray-300">
                    説明
                  </div>
                  {recipe.description}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {properties.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-200"
                  >
                    <div className="mb-1 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center">
                      {item.label}
                    </div>
                    <div className="text-sm text-slate-800 font-semibold">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              {/* <h4 className="flex items-center text-basic font-bold text-gray-600 border-b border-gray-300 py-1 mb-3">
                <LiaComment className="mr-1" />
                説明
              </h4>
              <div className="bg-slate-50 px-3 pt-2 rounded-lg border border-slate-200">
                {descripion}
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecipePropertyList;
