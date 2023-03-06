import React from "react";

export default function Button({ type = "button", icons, clickHandler, text }) {
  return (
    <button
      type={type}
      className="flex justify-center text-md items-center gap-2 px-4 py-3 bg-primary text-white font-medium rounded-sm"
      onClick={clickHandler}
    >
      {text}
      {icons}
    </button>
  );
}
