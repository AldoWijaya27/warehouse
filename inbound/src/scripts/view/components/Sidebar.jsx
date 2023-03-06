import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationPages } from "../../global/data";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

export default function Sidebar({ onLogoutHandler }) {
  const location = useLocation();

  const [activeUrl, setActiveUrl] = useState("");

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location]);

  return (
    <aside className="fixed top-0 left-0 w-72 min-h-full py-6 px-8 shadow-md flex flex-col gap-6 justify-start items-start">
      <div className="flex flex-col justify-start items-start gap-2">
        <h1 className="py-1 font-bold border-b-4 border-primary text-2xl">
          Warehouse
        </h1>
        <p className="font-normal italic text-gray-400 text-sm">
          Management System
        </p>
      </div>
      <nav className="w-full flex flex-col justify-start items-start gap-2 flex-grow">
        {navigationPages.map((navigation) => {
          return (
            <Link
              className={activeUrl === navigation.path ? "bg-secondary" : ""}
              to={navigation.path}
              key={navigation.id}
            >
              {navigation.icon}
              {navigation.text}
            </Link>
          );
        })}
        <Link onClick={onLogoutHandler}>
          <HiOutlineArrowLeftOnRectangle size={20} /> Logout
        </Link>
      </nav>
    </aside>
  );
}
