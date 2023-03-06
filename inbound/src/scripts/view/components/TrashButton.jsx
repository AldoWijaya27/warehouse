import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";

export default function TrashButton({ clickHandler }) {
  return (
    <button
      type="button"
      className="flex justify-center text-md items-center gap-2 px-4 py-3 bg-transparent text-red-500 font-medium rounded-sm"
      onClick={clickHandler}
    >
      Detele
      <HiOutlineTrash />
    </button>
  );
}
