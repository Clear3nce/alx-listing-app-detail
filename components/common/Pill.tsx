import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition ${
        isActive
          ? "bg-[34967C] text-white"
          : "bg-white text-[#34967C] border-[#34967C]"
      } hover:bg-[#34967C] hover:text-white`}
    >
      {label}
    </button>
  );
};

export default Pill;
