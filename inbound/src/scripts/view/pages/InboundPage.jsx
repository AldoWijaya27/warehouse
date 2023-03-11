import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import HeaderPage from "../components/HeaderPage";
import Button from "../components/Button";
import InboundTable from "../components/InboundTable";
import { dataInbound } from "../../global/data";

export default function InboundPage() {
  const navigate = useNavigate();

  const onAddProductHandler = (e) => {
    e.preventDefault();
    navigate("/inbound/new");
  };

  return (
    <div>
      <HeaderPage title="Inbound" subTitle="Lorem ipsum dolor sit amet consectetur" sideElement={<Button icons={<HiOutlinePlus size={20} strokeWidth={2} />} text="Add Products" clickHandler={onAddProductHandler} />} />
      <InboundTable dataInbound={dataInbound} />
    </div>
  );
}
