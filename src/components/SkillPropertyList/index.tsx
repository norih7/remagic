"use client";

import {
  LuTable,
  LuZap,
  LuTarget,
  LuAward,
  LuHexagon,
  LuBookType,
  LuMessageCircleMore,
} from "react-icons/lu";
import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { TbSquareChevronDownFilled } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { elementMap } from "@/constants";
import RoundedItem from "@/components/RoundedItem";

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
            label: <>習得条件1</>,
            value: skill.requirement === undefined ? "-" : skill.requirement,
          },
          {
            label: <>習得条件2</>,
            value: skill.requirement2 === undefined ? "-" : skill.requirement2,
          },
          {
            label: <>種別</>,
            value: skill.type,
          },
          {
            label: <>属性</>,

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
            label: <>消費TP</>,
            value: skill.tp === undefined ? "-" : skill.tp,
          },
          {
            label: <>最大HIT数</>,
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
              {skill.description}
              <br />
              {skill.remarks}
            </>
          );
        const DescriptionTitle = (
          <span className="flex items-center">
            <LuMessageCircleMore className="mr-1" />
            説明
          </span>
        );
        return (
          <div
            key={index}
            className="mb-4 border border-slate-300 rounded-lg p-3 font-bold"
          >
            {skillName}
            <div className="grid grid-cols-2 gap-2 mb-2">
              {displayItems.map((item, index) => (
                <RoundedItem title={item.label} key={index}>
                  {item.value}
                </RoundedItem>
              ))}
            </div>
            <RoundedItem title={DescriptionTitle}>{descripion}</RoundedItem>
          </div>
        );
      })}
    </>
  );
};

export default SkillPropertyList;
