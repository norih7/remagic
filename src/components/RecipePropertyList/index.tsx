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
  LuFilter,
} from "react-icons/lu";
import { useState, useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Information from "@/components/Information";

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
  const [result, setResult] = useState<Recipes[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // '1' が取れる
  useEffect(() => {
    const recipeId = id ? parseInt(id, 10) : null;
    const filter = recipeId
      ? recipes.filter((item) => item.id === recipeId)
      : recipes;
    setResult(filter);
  }, [id]);
  // 配列をループして表示する設計にします
  return (
    <>
      <div>
        {id ? null : (
          <div className="mb-8">
            <Information title="マスター料理とは">
              <p>
                ワンダーシェフから学べる料理には「マスター料理」が存在します。特定の料理で熟練度をMAXにすると、料理実行時に「新しい料理をマスターしました」とアナウンスされ、習得可能です。
              </p>
              <p>
                マスター料理は回復効果量が多いだけでなく、HP/TPの増加など強力な特殊効果を持っているため、積極的に習得しておきましょう。習得条件は「特定のキャラクターの熟練度をMAXにすること」ですが、一度習得すればパーティメンバー全員がその料理を作れるようになります。
                詳細は以下の料理一覧をチェックしてください。
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src="/systems/recipe-master-recipe.jpg"
                  alt=""
                  width={300}
                  height={200}
                  className="mr-1"
                />
              </div>
            </Information>
          </div>
        )}
        {id && (
          <div className="bg-sky-600 text-white px-4 py-4 rounded-lg flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <LuFilter />
              <span className="font-semibold">フィルタ適用中 (ID: {id})</span>
            </div>
            <a
              href="/systems/recipe"
              className="!text-white bg-sky-700 px-3 py-1 rounded text-sm font-medium transition"
            >
              解除する
            </a>
          </div>
        )}
      </div>
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
