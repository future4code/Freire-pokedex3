import { GlobalContextState } from "./globalContextState";
import { useState } from "react";
import { useRequestedData } from "../Hooks/useRequestedData";


export const PokeProvider = (props) => {
  const [pokeList, pokeDetails, getPokemon] = useRequestedData("?limit=20offset=0", []);
  const [pokedex, setPokedex] = useState([]) 
  

  const pokeId = pokeDetails && pokeDetails.map (p => {
    return p.id;
  })

  const pokeTypes = pokeDetails && pokeDetails.map (p => {
    return p.types;
  })

  const pokeStats = pokeDetails && pokeDetails.map (p => {
    return p.stats;
  })    

  const pokeMoves = pokeDetails && pokeDetails.map (p => {
    return p.moves;
  })
  
  const pokePhotos = pokeDetails && pokeDetails.map (p => {
    return p.sprites
  }) 


  const pokeAdd = () => {
  
      let newPoke = pokeId
       const newArray = [...pokedex, newPoke]
       setPokedex(newArray) 
  };

  const data = {
    pokeMoves,
    pokeId,
    pokeStats,
    pokeTypes,
    pokePhotos,
    pokeAdd,
    pokeList
  }
  

  return (
    <GlobalContextState.Provider value={data}>
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default PokeProvider;
