import React, { useContext, useEffect } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../Constants/url";
import { useRequestedData } from "../../Hooks/useRequestedData";
import { ImgContainer, TypeLabel } from "./CardPokemonStyle";
import { goToDetails } from "../../Router/Coordinator";

export const CardPokemon = () => {
  const { pokeDetails, setPokeDetails, pokedex, setPokedex } =
    useContext(GlobalContextState);

  const navigate = useNavigate();
  const [pokeList] = useRequestedData("?limit=20offset=0", []);

  const addNewPokemon = (id) => {
    const arrayPokedex = [...pokedex];
    if (arrayPokedex.includes(id)) {

    } else {
      arrayPokedex.push(id);
      setPokedex(arrayPokedex);
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
  };


console.log(pokeDetails)
console.log(pokedex)

  useEffect(() => {
    addNewPokemon();
  }, [pokedex]);


  return (
    <div>
      {pokeDetails && pokeDetails.map((p) => {
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
              <button
                onClick={() => {
                  goToDetails(navigate, p.name);
                }}
              >
                Detalhes
              </button>
              <button onClick={() => addNewPokemon(p.name)}>Adicionar</button>
            </div>
          );
        })}
    </div>
  );
};
