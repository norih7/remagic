"use client";

import { useState } from "react";

type Direction = "up" | "down" | "left" | "right";

const GRAY = "#9ca3af";

const activeColor: Record<Direction, string> = {
  up: "#22c55e", // 緑
  right: "#ef4444", // 赤
  left: "#ec4899", // ピンク
  down: "#3b82f6", // 青
};

const positionStyle: Record<Direction, React.CSSProperties> = {
  up: { top: -12, left: "50%", transform: "translateX(-50%)" },
  down: { bottom: -12, left: "50%", transform: "translateX(-50%)" },
  left: { left: -12, top: "50%", transform: "translateY(-50%)" },
  right: { right: -12, top: "50%", transform: "translateY(-50%)" },
};

export default function DirectionalButtons() {
  const [active, setActive] = useState<Record<Direction, boolean>>({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  const toggle = (dir: Direction) => {
    setActive((prev) => ({ ...prev, [dir]: !prev[dir] }));
  };

  const directions: Direction[] = ["up", "down", "left", "right"];

  return (
    <div
      style={{
        position: "relative",
        width: 80,
        height: 80,
        margin: "0px auto",
      }}
    >
      {/* 正方形 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid #d1d5db",
          borderRadius: 8,
          boxSizing: "border-box",
          backgroundColor: "#f9fafb",
        }}
      />

      {/* 上下左右の丸ボタン */}
      {directions.map((dir) => (
        <button
          key={dir}
          onClick={() => toggle(dir)}
          aria-label={dir}
          style={{
            position: "absolute",
            width: 25,
            height: 25,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            backgroundColor: active[dir] ? activeColor[dir] : GRAY,
            transition: "background-color 0.15s ease",
            ...positionStyle[dir],
          }}
        />
      ))}
    </div>
  );
}
