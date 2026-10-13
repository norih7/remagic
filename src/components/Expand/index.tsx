import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

type Props = {
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
};

const Expand = (props: Props) => {
  const { title, description, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const icon = isOpen ? (
    <LuChevronDown size={12} />
  ) : (
    <LuChevronRight size={12} />
  );

  return (
    <div className="grid grid-cols-1 mb-4 border border-gray-400 bg-gray-0 rounded-sm px-4 pt-1">
      <div
        className={`py-2 cursor-pointer select-none ${
          isOpen ? "border-b border-gray-400" : ""
        }`}
        onClick={toggleOpen}
      >
        <div className="font-bold flex items-center gap-2">
          <div>{icon}</div>
          {title}
        </div>
        {description && <span className="text-xs">{description}</span>}
      </div>
      {isOpen && <div className="py-2">{children}</div>}
    </div>
  );
};

export default Expand;
