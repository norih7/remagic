"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuFilter, LuX } from "react-icons/lu";
import { Dispatch, SetStateAction } from "react";

type FilterList = { name: string; id: number };
type Filter = {
  id?: number;
  category?: string;
  name?: string;
};

type Props = {
  list: FilterList[];
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

export default function RecipeContent({ list, setFilter, filter }: Props) {
  // 現在適用されているフィルタ
  const activeFilters = list.filter((item) => item.id === filter?.id);

  return (
    <div className="space-y-6 mb-4">
      {/* フィルタボタンとフィルタタグを同じ行に配置 */}
      <div className="flex items-center gap-4">
        {/* 1. フィルタ選択ボタン */}
        <Popover>
          <PopoverTrigger
            className={buttonVariants({
              variant: "outline",
              className:
                "gap-2 h-9 text-slate-600 shrink-0 !border-slate-300 !border bg-white transition-all hover:border-slate-400 hover:bg-sky-50",
            })}
          >
            <LuFilter className="w-4 h-4" />
            料理フィルタ
          </PopoverTrigger>

          <PopoverContent className="w-[32rem] p-5" align="start">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-sm text-slate-900">
                  料理選択
                </h4>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  {list.length} 件
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setFilter({ id: item.id })}
                      className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
                        filter.id === item.id
                          ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>

        {/* 2. 現在のフィルタ設定（右側へ伸縮） */}
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-800 rounded-full text-sm font-medium"
            >
              <span>{item.name}</span>
              <button
                onClick={() => setFilter({ id: undefined })}
                className="hover:text-red-600 transition-colors ml-1"
                aria-label="フィルタを解除"
              >
                <LuX className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
