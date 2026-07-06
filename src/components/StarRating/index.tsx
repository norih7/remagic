"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  totalStars?: number;
  rating?: number; // 初期評価ではなく、現在の表示評価として受け取ります
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  rating = 0,
}) => {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={16} // サイズを小さく設定（必要に応じて調整してください）
            color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
