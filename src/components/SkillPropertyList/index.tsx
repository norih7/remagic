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

type Element = keyof typeof elementMap;

export interface Skill {
  name: string;
  ruby?: string;
  description: string;
  remarks?: string;
  requirement: string;
  requirement2?: string;
  tp?: number;
  hit?: number;
  element: Element[];
  type?: string;
}

// 修正点: PropertyListProps が Skill[] を受け取るように変更
interface SkillPropertyListProps {
  skills: Skill[];
}

export const SkillPropertyList: React.FC<SkillPropertyListProps> = ({
  skills,
}) => {
  const [result, setResult] = useState(skills);
  const click = () => {
    setResult(
      skills.filter(
        (spell) =>
          (spell.requirement && spell.requirement.includes("ノーム")) ||
          (spell.requirement2 && spell.requirement2.includes("ノーム")),
      ),
    );
  };
  // 配列をループして表示する設計にします
  return (
    <>
      {result.map((skill, index) => {
        // const bg = elementMap[skill.element].color;
        const properties = [
          {
            label: (
              <>
                <LuAward className="text-lime-600 mr-1" />
                習得条件1
              </>
            ),
            value: skill.requirement === undefined ? "-" : skill.requirement,
          },
          {
            label: (
              <>
                <LuAward className="text-lime-600 mr-1" />
                習得条件2
              </>
            ),
            value: skill.requirement2 === undefined ? "-" : skill.requirement2,
          },
          {
            label: (
              <>
                <LuBookType className="text-gray-600 mr-1" />
                種別
              </>
            ),
            value: skill.type,
          },
          {
            label: (
              <>
                <LuHexagon className="text-mist-400 mr-1" />
                属性
              </>
            ),

            value:
              skill.element.length === 0 ? (
                "-"
              ) : (
                <span className="flex">
                  {skill.element.map((name, index) => {
                    const color = elementMap[name].color;
                    return (
                      <span className="flex items-center mr-2" key={index}>
                        <FaCircleDot className={`${color} mr-1`} />
                        {elementMap[name].name}
                      </span>
                    );
                  })}
                </span>
              ),
          },
          {
            label: (
              <>
                <LuZap className="text-yellow-500 mr-1" />
                消費TP
              </>
            ),
            value: skill.tp === undefined ? "-" : skill.tp,
          },
          {
            label: (
              <>
                <LuTarget className="text-rose-300 mr-1" />
                最大HIT数
              </>
            ),
            value: skill.hit === undefined ? "-" : skill.hit,
          },
        ];

        const displayItems = properties.filter(
          (item) =>
            item.value !== "" && item.value !== 0 && item.value !== undefined,
        );

        const ruby = skill.ruby === undefined ? "" : <>（{skill.ruby}）</>;
        const skillName = (
          <h3 className="flex items-center text-slate-700 text-[1rem]">
            {skill.name}
            <span className="text-xs">{ruby}</span>
          </h3>
        );
        const descripion =
          skill.remarks === undefined ? (
            <p>{skill.description}</p>
          ) : (
            <>
              <p>{skill.description}</p>
              <p className="border-t border-gray-200 pt-2">{skill.remarks}</p>
            </>
          );
        return (
          <div
            key={index}
            className="mb-4 font-bold border border-slate-300 rounded-lg p-3"
          >
            {skillName}
            <div className="">
              <h4 className="flex items-center text-basic font-bold text-gray-600 border-b border-gray-300 py-1 mb-2">
                <LuTable className="mr-1" />
                データ
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {displayItems.map((item, index) => (
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
              <h4 className="flex items-center text-basic font-bold text-gray-600 border-b border-gray-300 py-1 mb-2">
                <LiaComment className="mr-1" />
                説明
              </h4>
              <div className="bg-slate-50 px-3 pt-2 rounded-lg border border-slate-200 font-normal">
                {descripion}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillPropertyList;
