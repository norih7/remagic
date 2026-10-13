"use client";

import {
  LuTable,
  LuZap,
  LuTarget,
  LuAward,
  LuHexagon,
  LuArrowRight,
} from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { TbSquareChevronDownFilled } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { elementMap } from "@/constants";
import StarRating from "@/components/StarRating";
import { LuCornerDownRight } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import RoundedItem from "@/components/RoundedItem";

type Element = keyof typeof elementMap;

export interface Rune {
  before: string;
  after: string;
  rate: number;
  canBuy: boolean;
  description: string;
  remarks?: string;
}

interface RunePropertyListProps {
  runes: Rune[];
}

export const RunePropertyList: React.FC<RunePropertyListProps> = ({
  runes,
}) => {
  const [result, setResult] = useState(runes);
  // 配列をループして表示する設計にします
  return (
    <>
      {result.map((rune, index) => {
        // const bg = elementMap[skill.element].color;
        const properties = [
          {
            label: <>オススメ度</>,
            value: <StarRating rating={rune.rate} />,
          },
          {
            label: <>ショップ/敵ドロップ入手</>,
            value: rune.canBuy ? "可能" : "不可能",
          },
        ];

        const descripion =
          rune.remarks === undefined ? (
            <p>{rune.description}</p>
          ) : (
            <>
              <p>{rune.remarks}</p>
              <p className="border-t border-gray-200 pt-2">{rune.remarks}</p>
            </>
          );
        return (
          <div
            key={index}
            className="mb-4 border border-slate-300 rounded-lg p-3 text-slate-700"
          >
            <h3 className="text-lg flex items-center font-bold mb-2">
              {rune.before} <LuArrowRight className="mx-2" /> {rune.after}
            </h3>
            {/* <div className="grid grid-cols-2 mb-2 font-bold">
              <div className="pl-2">
                <span className="bg-gray-500 py-1 px-3 rounded-xs text-white text-xs">
                  変化前
                </span>
                <div className="text-lg">{rune.before}</div>
              </div>
              <div className="pl-2">
                <span className="bg-lime-600 py-1 px-3 rounded-xs text-white text-xs">
                  変化後
                </span>
                <div className="text-lg">{rune.after}</div>
              </div>
            </div> */}
            <div className=" border-slate-300 rounded-lg">
              <div className="grid grid-cols-2 gap-2 mb-2">
                {properties.map((item, index) => (
                  <RoundedItem title={item.label} key={index}>
                    {item.value}
                  </RoundedItem>
                ))}
              </div>
              <RoundedItem title="説明">{rune.description}</RoundedItem>
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

export default RunePropertyList;
