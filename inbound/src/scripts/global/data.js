import React from "react";
import { HiOutlinePresentationChartLine, HiOutlineUserGroup, HiOutlineCube, HiOutlineArrowDownOnSquare, HiOutlineArrowUpOnSquare, HiOutlineUser, HiOutlineArrowLeftOnRectangle, HiOutlineMapPin, HiOutlineScale } from "react-icons/hi2";

const navigationPages = [
  {
    id: 1,
    path: "/",
    text: "Dashboard",
    icon: <HiOutlinePresentationChartLine size={20} />,
  },
  {
    id: 2,
    path: "/users",
    text: "Users",
    icon: <HiOutlineUserGroup size={20} />,
  },
  {
    id: 3,
    path: "/categories",
    text: "Categories",
    icon: <HiOutlineCube size={20} />,
  },
  {
    id: 4,
    path: "/locations",
    text: "Locations",
    icon: <HiOutlineMapPin size={20} />,
  },
  {
    id: 5,
    path: "/measurements",
    text: "Measurements",
    icon: <HiOutlineScale size={20} />,
  },
  {
    id: 6,
    path: "/inbound",
    text: "Inbound",
    icon: <HiOutlineArrowDownOnSquare size={20} />,
  },
  {
    id: 7,
    path: "/outbound",
    text: "Outbound",
    icon: <HiOutlineArrowUpOnSquare size={20} />,
  },
  {
    id: 8,
    path: "/user/me",
    text: "Tiga Belas",
    icon: <HiOutlineUser size={20} />,
  },
  // {
  //   id: 9,
  //   path: "/",
  //   text: "Logout",
  //   icon: <HiOutlineArrowLeftOnRectangle size={20} />,
  // },
];

const categoryOptions = [
  {
    label: "Senjata api",
    value: "Senjata api",
  },
  {
    label: "Misil",
    value: "Misil",
  },
  {
    label: "Tank",
    value: "Tank",
  },
];

const dataInbound = [
  {
    id: 1,
    date: "12/02/2023",
    products: "Senjata Api",
    location: "PT. Len Industri (Persero), Bandung",
    stock: 4000,
  },
  {
    id: 2,
    date: "12/02/2023",
    products: "Senjata Api",
    location: "PT. Len Industri (Persero), Bandung",
    stock: 4000,
  },
  {
    id: 3,
    date: "12/02/2023",
    products: "Tank",
    location: "PT. Len Industri (Persero), Subang",
    stock: 4000,
  },
  {
    id: 4,
    date: "12/02/2023",
    products: "Misil",
    location: "PT. Len Industri (Persero), Jakarta",
    stock: 4000,
  },
];

export { navigationPages, categoryOptions, dataInbound };
