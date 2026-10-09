"use client";
import { useState } from "react";
import Menu from "./Menu";
import { LuAlignJustify } from "react-icons/lu";
import { MdClose } from "react-icons/md";
export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden p-1 text-gray-800 font-bold text-sm bg-gray-800 text-white text-center w-5.5 rounded-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <MdClose />
        ) : (
          <>
            <LuAlignJustify />
          </>
        )}
      </button>

      {/* スマホ時のみメニューを表示 */}
      {isOpen && (
        <div className="md:hidden absolute top-13 left-0 w-full bg-white p-4 shadow-lg z-50">
          <Menu />
        </div>
      )}
    </>
  );
}
