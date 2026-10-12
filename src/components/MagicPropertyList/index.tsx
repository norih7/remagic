"use client";

import {
  LuTable,
  LuZap,
  LuTarget,
  LuAward,
  LuHexagon,
  LuBookType,
  LuSlidersHorizontal,
  LuMessageCircleMore,
} from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";
import { LiaComment } from "react-icons/lia";
import { TbSquareChevronDownFilled } from "react-icons/tb";
import { FaCircleDot } from "react-icons/fa6";
import { elementMap } from "@/constants";
import RoundedItem from "@/components/RoundedItem";
import RoundedInlineList from "@/components/RoundedInlineList";
import RoundedContainer from "../RoundedContainer";
import Tag from "@/components/Tag";
import Elements from "@/components/Elements";
import Expand from "@/components/Expand";

type Element = keyof typeof elementMap;

export interface Skill {
  name: string;
  ruby?: string;
  description: string;
  remarks?: string;
  requirement?: string;
  requirement2?: string;
  tp?: number;
  hit?: number;
  element: Element[];
  type?: string;
  pair?: string[];
}

// 修正点: PropertyListProps が Skill[] を受け取るように変更
interface SkillPropertyListProps {
  skills: Skill[];
}

// 2. ユーザーのケイジ状態の型定義
export interface UserCageState {
  merdy: (string | null)[];
  kyle: (string | null)[];
}

// 3. 全体で装備されている属性のリストを取得する関数
function getEquippedElements(cageState: UserCageState): string[] {
  const allElements = [...cageState.merdy, ...cageState.kyle].filter(
    (element): element is string => element !== null,
  ); // nullを除外しつつ型をstringに絞り込む

  // 重複を除外した配列を返す
  return Array.from(new Set(allElements));
}

// 4. フィルタリング関数
export function filterAvailableSkills(
  skills: Skill[],
  cageState: UserCageState,
): Skill[] {
  const merdyElements = cageState.merdy.filter((e): e is string => e !== null);
  const kyleElements = cageState.kyle.filter((e): e is string => e !== null);

  // 現在全体で装備されている属性のリスト
  const allEquippedElements = [...merdyElements, ...kyleElements];

  // 1. cageStateが初期値（何も選択されていない状態）であれば、すべてのskillsを表示
  if (allEquippedElements.length === 0) {
    return skills;
  }

  return skills.filter((skill) => {
    const requiredPairs = skill.pair ?? [];

    // pair がない（初期習得など）ものは無条件で表示
    if (requiredPairs.length === 0) {
      return true;
    }

    // 2. 選択属性（またはスキルの必要ペア）が1つの場合（例: "water" のスプレッド等）
    if (requiredPairs.length === 1) {
      const [attr] = requiredPairs;
      // 装備されている属性の中に、その必要属性が含まれていればOK（どちらのケイジに入っていても可）
      return allEquippedElements.includes(attr);
    }

    // 3. 2属性のフリンジ術の場合（異ケイジ間分散の判定）
    if (requiredPairs.length === 2) {
      const [attr1, attr2] = requiredPairs;

      const patternA =
        merdyElements.includes(attr1) && kyleElements.includes(attr2);
      const patternB =
        merdyElements.includes(attr2) && kyleElements.includes(attr1);

      return patternA || patternB;
    }

    return false;
  });
}

export const SkillPropertyList: React.FC<SkillPropertyListProps> = ({
  skills,
}) => {
  const [result, setResult] = useState(skills);

  const userCageState: Record<"merdy" | "kyle", string[]> = {
    merdy: [],
    kyle: [],
  };
  const [cageState, setCageState] = useState(userCageState);

  const craymels = [
    { name: "ウンディーネ", element: "water" },
    { name: "シルフ", element: "wind" },
    { name: "イフリート", element: "fire" },
    { name: "ノーム", element: "earth" },
    { name: "セルシウス", element: "ice" },
    { name: "ヴォルト", element: "thunder" },
    { name: "レム", element: "light" },
    { name: "シャドウ", element: "dark" },
    { name: "マクスウェル", element: "origin" },
    { name: "ゼクンドゥス", element: "time" },
  ];

  const craymelList = ["merdy", "kyle"].reduce(
    (acc, charName) => {
      // 操作対象（merdy か kyle）と相手側のキーを特定
      const targetKey = charName as "merdy" | "kyle";
      const opponentKey = targetKey === "merdy" ? "kyle" : "merdy";

      acc[targetKey] = craymels.map((item, index) => {
        const { name, element } = item;

        // 自分がセットしているか、相手がセットしているか判定
        const isIncluded = cageState[targetKey].includes(element);
        const isOpponentIncluded = cageState[opponentKey].includes(element);

        const statusClass = isIncluded ? "bg-blue-200" : "bg-white";

        return (
          <button
            className={`px-3 border border-gray-300 rounded-xl cursor-pointer ${statusClass}`}
            key={`${targetKey}-${index}`}
            onClick={() => {
              const newState = {
                merdy: [...cageState.merdy],
                kyle: [...cageState.kyle],
              };

              if (isIncluded) {
                // すでに入っている場合は解除
                newState[targetKey] = newState[targetKey].filter(
                  (item) => item !== element,
                );
              } else {
                // 相手側に入っていれば相手側から解除し、自分側に追加
                if (isOpponentIncluded) {
                  newState[opponentKey] = newState[opponentKey].filter(
                    (item) => item !== element,
                  );
                }
                newState[targetKey].push(element);
              }
              setCageState(newState);
            }}
          >
            {name}
          </button>
        );
      });

      return acc;
    },
    {} as Record<"merdy" | "kyle", React.ReactNode[]>,
  );

  const availableSkills = filterAvailableSkills(skills, cageState);
  const isApplyFilter = cageState.merdy.length > 0 || cageState.kyle.length > 0;

  // 配列をループして表示する設計にします
  return (
    <>
      <Expand
        title="フリンジシミュレータ"
        description="選択した組み合わせによって発生する晶霊術を表示します"
      >
        <>
          {isApplyFilter && (
            <div className="pt-3">
              <button
                className="bg-gray-700 text-white rounded-sm text-sm px-2 py-0.5 flex items-center cursor-pointer"
                onClick={() => {
                  setCageState(userCageState);
                }}
              >
                <MdCancel className="mr-0.5" />
                選択全解除
              </button>
            </div>
          )}
          <dl className="text-sm">
            <div className="flex py-4 border-b border-gray-300">
              <dt className="w-[80px]">メルディ</dt>
              <dd className="flex-1">
                <div className="flex flex-wrap gap-2">{craymelList.merdy}</div>
              </dd>
            </div>
            <div className="flex py-4">
              <dt className="w-[80px]">キール</dt>
              <dd className="flex-1">
                <div className="flex flex-wrap gap-2">{craymelList.kyle}</div>
              </dd>
            </div>
          </dl>
        </>
      </Expand>

      {availableSkills.map((skill, index) => {
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
        ];

        const displayItems = properties.filter(
          (item) => item.value !== "" && item.value !== undefined,
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
          <RoundedContainer key={index}>
            <div className="mb-3">
              {skillName}
              <div className="flex flex-wrap items-center gap-1">
                <RoundedInlineList title="種別" type="wide">
                  {skill.type}
                </RoundedInlineList>
                <RoundedInlineList title="TP" type="wide">
                  {skill.tp}
                </RoundedInlineList>
                <RoundedInlineList title="HIT" type="wide">
                  {skill.hit}
                </RoundedInlineList>
                <RoundedInlineList title="属性" type="wide">
                  <Elements list={skill.element} />
                </RoundedInlineList>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {displayItems.map((item, index) => (
                <RoundedItem title={item.label} key={index}>
                  {item.value}
                </RoundedItem>
              ))}
            </div>
            <RoundedItem title={DescriptionTitle}>{descripion}</RoundedItem>
          </RoundedContainer>
        );
      })}
    </>
  );
};

export default SkillPropertyList;
