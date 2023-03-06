import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchField({ value, changeHandler }) {
  const [activeSearch, setActiveSearch] = useState(false);
  return (
    <div
      className={`flex justify-center items-center gap-3 py-2 px-2 border-2 border-gray-400 rounded-md ${
        activeSearch ? "border-textColor" : ""
      } `}
    >
      <HiOutlineMagnifyingGlass
        size={24}
        color={activeSearch ? "#181923" : "#9ca3af"}
      />
      <input
        type="search"
        value={value}
        onChange={changeHandler}
        placeholder="Search"
        className="border-none w-full p-0 active:border-none focus:border:none outline-none text-sm"
        onFocus={() => setActiveSearch(!activeSearch)}
        onBlur={() => setActiveSearch(false)}
      />
    </div>
  );
}
