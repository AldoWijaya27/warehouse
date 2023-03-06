import React from "react";
import HeaderPage from "../components/HeaderPage";
import InboundTable from "../components/InboundTable";
import SearchField from "../components/SearchField";
import { dataInbound } from "../../global/data";

export default function OutboundPage() {
  return (
    <div>
      <HeaderPage
        title="Outbound Page"
        subTitle="Lorem ipsum color sit amet"
        sideElement={<SearchField />}
      />
      <InboundTable dataInbound={dataInbound} />
    </div>
  );
}
