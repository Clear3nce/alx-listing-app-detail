import React from "react";
import { LabeledInputProps } from "@/interfaces";

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  id,
  placeholder,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34967c]"
      />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 py-6 px-4 md:px-8 bg-white shadow-sm">
      <div className="self-center md:self-auto">
        <a href="/">
          <img
            src="./assets/Vector.png"
            alt="ALX Logo"
            className="h-8 w-auto"
          />
        </a>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-4 w-full md:w-auto">
        <LabeledInput
          label="Location"
          id="location"
          placeholder="Enter the location"
        />
        <LabeledInput label="Check In" id="checkin" placeholder="Add note" />
        <LabeledInput label="Check Out" id="checkout" placeholder="Add note" />
        <LabeledInput label="People" id="people" placeholder="Add guest" />
        <button
          aria-label="Search"
          className="p-2 self-center md:self-end mt-2 md:mt-0 cursor-pointer"
        >
          <img
            src="./assets/Frame 22.png"
            alt="Search icon"
            className="h-[40px] w-[180px]"
          />
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
        <button className="bg-[#34967C] text-white w-full md:w-[103px] h-[45px] rounded-3xl hover:opacity-90 transition cursor-pointer">
          Sign In
        </button>
        <button className="bg-[#ececec] w-full md:w-[103px] h-[45px] rounded-3xl hover:bg-gray-300 transition cursor-pointer">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
