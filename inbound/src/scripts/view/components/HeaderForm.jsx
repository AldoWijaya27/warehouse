import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Button from "./Button";

export default function HeaderForm({ onBackButtonHandler, titleForm }) {
  return (
    <div className="w-full flex justify-items-stretch items-start py-3 relative">
      <Button
        text={<HiOutlineArrowLeft size={20} strokeWidth={2} />}
        clickHandler={onBackButtonHandler}
      />
      <h1 className="text-2xl text-center font-bold self-center absolute left-1/2 -translate-x-1/2">
        {titleForm}
      </h1>
    </div>
  );
}
