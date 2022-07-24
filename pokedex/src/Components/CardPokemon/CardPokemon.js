import React, { useContext, useEffect } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../Constants/url";
import { useRequestedData } from "../../Hooks/useRequestedData";
import { ImgContainer, TypeLabel } from "./CardPokemonStyle";

export const CardPokemon = () => {
  const { pokeDetails, setPokeDetails } = useContext(GlobalContextState);

  const [pokeList] = useRequestedData("?limit=20offset=0", []);

  // const addNewPokemon = () => {
  //   const addToPokedex = [...pokedex, pokeAdd];
  //   setPokedex(addNewPokemon);
  // key={p?.id}
  // };

  console.log(pokeDetails);

  const pokeTypes =
    pokeDetails &&
    pokeDetails.types &&
    pokeDetails.types.map((p) => {
      return (
        <TypeLabel type={p?.type?.name}>
          <img src={`/type-vectors/${p?.type?.name}.svg`} alt={p.type.name} />
          <p>{p?.type?.name}</p>
        </TypeLabel>
      );
    });

  // console.log(pokeDetails.id)

  return (
    <div>
      {pokeDetails &&
        pokeDetails.map((p) => {
          return (
            <div key={p.id}>
              <p>#0{p.id}</p>
              <p>{p.name}</p>
              {p.types.map((t) => {
                return (
                  <TypeLabel key={t.id} type={t?.type?.name}>
                    <img
                      src={`/type-vectors/${t?.type?.name}.svg`}
                      alt={t.type.name}
                    />
                    <p>{t?.type?.name}</p>
                  </TypeLabel>
                );
              })}
              <ImgContainer
                src={p?.sprites?.other["official-artwork"].front_default}
                alt={p.name}
              />
              <button>Detalhes</button>
              <button>Adicionar</button>
            </div>
          );
        })}
    </div>
  );
};
