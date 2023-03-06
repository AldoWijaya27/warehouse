import React from "react";

export default function HeaderPage({ title, subTitle, sideElement }) {
  return (
    <div className="flex justify-between items-start py-2 mb-10">
      <div>
        <h1 className="text-2xl font-bold ">{title}</h1>
        <p className="text-gray-400 text-sm">{subTitle}</p>
      </div>
      {sideElement}
    </div>
  );
}
