import React, { useContext, useEffect } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../Constants/url";
import { useRequestedData } from "../../Hooks/useRequestedData";
import { ImgContainer } from "./CardPokemonStyle";

export const CardPokemon = () => {
  const { pokeDetails, setPokeDetails } = useContext(GlobalContextState);

  const [pokeList] = useRequestedData("?limit=20offset=0", []);

  // const addNewPokemon = () => {
  //   const addToPokedex = [...pokedex, pokeAdd];
  //   setPokedex(addNewPokemon);
  // };

  console.log(pokeDetails);

  // const pokePhoto =
  //   pokeDetails &&
  //   pokeDetails.map((p) => {
  //     return (
  //       <div key={p.id}>
  //         <img
  //           src={p?.sprites?.other["official-artwork"].front_default}
  //           alt={p.name}
  //         />
  //       </div>
  //     );
  //   });

  return (
    <div>
      {pokeDetails &&
        pokeDetails.map((p) => {
          return (
            <div key={p.id}>
              <p>#0{p.id}</p>
              <p>{p.name}</p>
              <ImgContainer
                src={p?.sprites?.other["official-artwork"].front_default}
                alt={p.name}
              />
            </div>
          );
        })}
    </div>
  );
};
