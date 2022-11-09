import React from "react";
import { Provider } from "react-redux";
import { store } from "store";

export const renderWithRedux = (component: React.ReactNode) => {
  return <Provider store={store}>{component}</Provider>;
};
