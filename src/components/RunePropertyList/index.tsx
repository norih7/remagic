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
import { elementMap } from "@/constants";
import StarRating from "@/components/StarRating";
import { LuCornerDownRight } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";

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
            label: (
              <>
                <LuShoppingBag className="text-lime-600 mr-1" />
                ショップ/敵ドロップ入手
              </>
            ),
            value: rune.canBuy ? "可能" : "不可能",
          },
          {
            label: (
              <>
                <LuAward className="text-lime-600 mr-1" />
                オススメ度
              </>
            ),
            value: <StarRating rating={rune.rate} />,
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
            className="mb-4 font-bold border border-slate-300 rounded-lg p-3 text-slate-700"
          >
            <h3 className="text-[1rem]">{rune.before}</h3>
            <div className=" border-gray-300  rounded-lg font-bold">
              <div className="bg-slate-50 px-3 pt-2 mb-2 rounded-lg border border-slate-200">
                <div className="mb-2">
                  <div className="mb-1 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center">
                    変化後のアイテム
                  </div>
                  <span className="flex items-center">
                    <LuCornerDownRight className="mr-1" />
                    {rune.after}
                  </span>
                </div>
                <div className="mb-2">
                  <div className="mb-1 pt-2 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center border-t border-gray-300">
                    説明
                  </div>
                  {rune.description}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-">
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

export default RunePropertyList;
