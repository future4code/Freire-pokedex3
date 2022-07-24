import { GlobalContextState } from "./globalContextState";
import { useState } from "react";
import { useRequestedData } from "../Hooks/useRequestedData";


export const PokeProvider = (props) => {
  const [pokeList, pokeDetails, getPokemon] = useRequestedData("?limit=20offset=0", []);
  const [pokedex, setPokedex] = useState([]) 
  

  
  const data = {
    
    pokeList,
    pokeDetails
  }
  

  return (
    <GlobalContextState.Provider value={data}>
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default PokeProvider;
