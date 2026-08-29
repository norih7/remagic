"use client";
import { LuCirclePlay } from "react-icons/lu";

import { useState } from "react";
import Image from "next/image";

type GifPlayerProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function GifPlayer({
  src,
  alt,
  width = 230,
  height = 150,
}: GifPlayerProps) {
  const [showGif, setShowGif] = useState(false);

  return (
    <div
      onClick={() => setShowGif(true)}
      className={`cursor-pointer relative w-[${width}px] h-[${height}px] rounded-md overflow-hidden bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition`}
    >
      {showGif ? (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="rounded-md"
          unoptimized
        />
      ) : (
        <>
          <LuCirclePlay className="mr-1" />
          <span className="text-xs text-gray-600 font-bold">動画を再生</span>
        </>
      )}
    </div>
  );
}
