import { GlobalContextState } from "../Context/globalContextState";
import { useState } from "react";
import { useRequestedData } from "../Hooks/useRequestedData";

export const PokeProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeList, getPokeList] = useRequestedData("?limit=20offset=0", {});

  // const pokeNames = pokeList.results.map((p) => {
  //   return p.name;
  // });
  console.log(pokeList.results);

  return (
    <GlobalContextState.Provider value={[pokemon, setPokemon]}>
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default PokeProvider;
