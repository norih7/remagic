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
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { MdWaterDrop } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { TbSquareChevronDownFilled } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { recipeTypeMap, recipeWorldMap } from "@/constants";
import StarRating from "@/components/StarRating";
import { LuChefHat, LuMap, LuBeef, LuGem } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { RecipeItems, LocationRecipes, LocationLenses } from "@/lib/db";
import RoundedItem from "@/components/RoundedItem";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Information from "@/components/Information";
import Filter from "@/components/Filter";
import ResponsiveImage from "@/components/ResponsiveImage";
import Tag from "@/components/Tag";

interface RunePropertyListProps {
  lenes: LocationLenses[];
}
type Filter = {
  id?: number;
  category?: string;
  name?: string;
};

export const LensPropertyList: React.FC<RunePropertyListProps> = ({
  lenes,
}) => {
  const [list, setList] = useState<LocationLenses[]>(lenes);
  const [filter, setFilter] = useState<Filter>({});
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // '1' が取れる
  useEffect(() => {
    if (filter.id) {
      const result = lenes.filter((item) => item.id === filter.id);
      setList(result);
    } else {
      setList(lenes);
    }
  }, [filter]);

  useEffect(() => {
    if (id) {
      setFilter({ id: Number(id) });
    }
  }, [id]);
  return (
    <>
      {filter.id && (
        <button
          className="px-3 py-1 border rounded-sm flex items-center mb-3"
          onClick={() => {
            setFilter({});
          }}
        >
          <MdClose className="mr-1" />
          フィルタ解除
        </button>
      )}

      {list.map((lens, index) => {
        return (
          <div
            key={index}
            className="mb-4 border border-slate-200 rounded-lg p-3 shadow-xs"
          >
            <div className="flex mb-2 items-center">
              <h3 className="text-[1rem] !mb-0">
                No.{lens.lensId} {lens.locationName}
              </h3>
            </div>
            <div className="mb-2">
              <Tag>{recipeWorldMap[lens.world]}</Tag>
            </div>
            <RoundedItem title="場所">
              <p>{lens.remarks}</p>
              <ResponsiveImage
                src={`/subevents/lens-location${lens.id}.jpg`}
                noSpace
              />
            </RoundedItem>
          </div>
        );
      })}
    </>
  );
};

export default LensPropertyList;
