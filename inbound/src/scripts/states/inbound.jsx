const InitialInboundState = {
  product: "",
  date: "",
  qty: "",
  location: "",
  building: "",
  room: "",
  floor: "",
  area: "",
  rack: "",
  rackLevel: "",
};

const InboundActions = {
  ADD_INBOUND: "ADD_INBOUND",
};

const InboundReducer = (states, action) => {
  switch (action.type) {
    case InboundActions.ADD_INBOUND:
      return action.payload;
    default:
      return states;
  }
};

export { InitialInboundState, InboundReducer, InboundActions };
