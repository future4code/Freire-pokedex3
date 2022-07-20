import { GlobalContextState } from "../Context/globalContextState";
import { useState } from "react";

export const PokeProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);

  return (
    <GlobalContextState.Provider value={{ pokemon, setPokemon }}>
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default PokeProvider;
