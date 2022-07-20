import React, { useContext } from "react";
import { GlobalContextState } from "../../Context/globalContextState";

export const Home = () => {
  const textinho = useContext(GlobalContextState);
  return <div>{textinho}</div>;
};
