import React, { useEffect } from "react";
import HeaderPage from "inbound/HeaderPage";
import SearchField from "inbound/SearchField";
import MeasurementsTable from "./MeasurementsTable";
import "../../index.scss";

export default function MainPage() {
  return (
    <div>
      <HeaderPage title="Measurements" subTitle="Lorem ipsum dolor sit amet" sideElement={<SearchField />} />
      <MeasurementsTable />
    </div>
  );
}
