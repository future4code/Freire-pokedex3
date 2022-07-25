import { GlobalContextState } from "./globalContextState";
import { useEffect, useState } from "react";
import { useRequestedData } from "../Hooks/useRequestedData";
import { urlBase } from "../Constants/url";
import axios from "axios";

export const PokeProvider = (props) => {
  const [pokeList] = useRequestedData("?limit=20offset=0", []);
  const [pokeDetails, setPokeDetails] = useState(undefined);
  const [pokedex, setPokedex] = useState([]);


  let pokemonDetails = [];

  useEffect(() => {
    pokeList &&
      pokeList.map((p) => {
        axios
          .get(`${urlBase}/${p.name}`)
          .then((res) => {
            pokemonDetails.push(res.data);
            setPokeDetails(pokemonDetails);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
  }, [pokeList]);

  const data = {
    pokeList,
    pokedex,
    pokeDetails,
    setPokeDetails,
    setPokedex,
  };

  return (
    <GlobalContextState.Provider value={data}>
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default PokeProvider;
