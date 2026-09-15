// src/hooks/useCategory.ts
"use client";
import { usePathname } from "next/navigation";
import { categoryName, CategoryKey } from "@/constants";

export function useCategory(): CategoryKey {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];

  // URLから取った値がカテゴリキーに含まれているかチェック
  if (segment in categoryName) {
    return segment as CategoryKey;
  }

  return "none"; // 存在しないパスの場合は undefined を返す
}
