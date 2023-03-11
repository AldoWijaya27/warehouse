import React from "react";

export default function Button({ icons, onClick }) {
  return (
    <a href="#" onClick={onClick} className="flex justify-center text-md items-center px-2 py-1 text-black rounded-md border">
      {icons}
    </a>
  );
}
