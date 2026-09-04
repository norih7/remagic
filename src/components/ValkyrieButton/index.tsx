"use client";

import { useState } from "react";

type Direction = "up" | "down" | "left" | "right";

const GRAY = "#9ca3af";

const dedaultColor: Record<Direction, string> = {
  up: "#ccd5cf", // 緑
  right: "#e0d3d3", // 赤
  left: "#e2d6dc", // ピンク
  down: "#ccd4e1", // 青
};

const activeColor: Record<Direction, string> = {
  up: "#14a248", // 緑
  right: "#c32020", // 赤
  left: "#d5207a", // ピンク
  down: "#1d5bbf", // 青
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
        width: 52,
        height: 52,
        margin: "0px auto",
      }}
    >
      {/* 正方形 */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          width: "100%",
          height: "18px",
          // border: "2px solid #d1d5db",
          boxSizing: "border-box",
          backgroundColor: "#eeeeee",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "18px",
          width: "18px",
          height: "100%",
          boxSizing: "border-box",
          backgroundColor: "#eeeeee",
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
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            backgroundColor: active[dir] ? activeColor[dir] : dedaultColor[dir],
            transition: "background-color 0.15s ease",
            ...positionStyle[dir],
            color: "#fff",
          }}
        >
          {active[dir] ? "!" : null}
        </button>
      ))}
    </div>
  );
}
