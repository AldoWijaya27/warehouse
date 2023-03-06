import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { categoryOptions } from "../../global/data";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import HeaderForm from "../components/HeaderForm";
import { dataInbound } from "../../global/data";
import useInput from "../../hooks/useInput";

export default function FormProductsPage() {
  const navigate = useNavigate();
  const [products, setProduct] = useState(null);
  const [date, setDate] = useInput("");
  const [stock, setStock] = useInput("");
  const [location, setLocation] = useState("");
  const [building, setBuilding] = useInput("");
  const [room, setRoom] = useInput("");
  const [floor, setFloor] = useInput("");
  const [area, setArea] = useInput("");
  const [rack, setRack] = useInput("");
  const [rackLevel, setRackLevel] = useInput("");

  const onSelecCategoriestHandler = (e) => {
    setProduct(e.value);
  };
  const onSelecLocationtHandler = (e) => {
    setLocation(e.value);
  };

  const onSubmitInboundProducts = (e) => {
    e.preventDefault();
    const data = {
      products: products,
      date: date,
      stock: stock,
      location: location,
      building: building,
      room: room,
      floor: floor,
      area: area,
      rack: rack,
      rackLevel: rackLevel,
    };

    console.log(data);

    dataInbound.push(data);
    navigate("/inbound");

    e.target.reset();
  };

  const onBackButtonHandler = (e) => {
    e.preventDefault();
    navigate("/inbound");
  };

  return (
    <div>
      <HeaderForm
        titleForm="Add Products"
        onBackButtonHandler={onBackButtonHandler}
      />
      <form
        className="w-2/3 mx-auto py-6 flex flex-col justify-start items-start gap-6"
        onSubmit={onSubmitInboundProducts}
      >
        <SelectField
          label="Products"
          options={categoryOptions}
          changeHandler={onSelecCategoriestHandler}
        />
        <div className="flex justify-between items-start w-full gap-6">
          <InputField
            type="date"
            label="Date"
            value={date}
            changeHandler={setDate}
          />
          <InputField
            label="stock"
            placeholder="1"
            value={stock}
            changeHandler={setStock}
          />
        </div>
        <SelectField
          label="Location"
          options={categoryOptions}
          changeHandler={onSelecLocationtHandler}
        />
        <InputField
          label="Building"
          value={building}
          changeHandler={setBuilding}
        />
        <div className="flex justify-between items-start w-full gap-6">
          <InputField label="Room" value={room} changeHandler={setRoom} />
          <InputField label="Floor" value={floor} changeHandler={setFloor} />
          <InputField label="Area" value={area} changeHandler={setArea} />
        </div>

        <div className="flex justify-between items-start w-full gap-6">
          <InputField label="Rack" value={rack} changeHandler={setRack} />
          <InputField
            label="Rack Level"
            value={rackLevel}
            changeHandler={setRackLevel}
          />
        </div>
        <Button type="submit" text="Add Products" />
      </form>
    </div>
  );
}
