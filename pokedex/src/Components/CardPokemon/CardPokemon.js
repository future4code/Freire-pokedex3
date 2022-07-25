import React, { useContext, useEffect } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../Constants/url";
import { useRequestedData } from "../../Hooks/useRequestedData";
import { ImgContainer, TypeLabel } from "./CardPokemonStyle";

export const CardPokemon = () => {
  const { pokeDetails, setPokeDetails, pokedex, setPokedex } =
    useContext(GlobalContextState);

  const [pokeList] = useRequestedData("?limit=20offset=0", []);

  const addNewPokemon = (id) => {
    const arrayPokedex = [...pokedex];
    if (arrayPokedex.includes(id)) {
      alert("Pokemon já capturado na pokedex");
    } else {
      arrayPokedex.push(id);
      setPokedex(arrayPokedex);
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
  };

  const getCardPokemon = () => {
    axios
      .get(`${urlBase}/${props.name}`)
      .then((res) => {
        setPokeType(res.data.types);
        setPokeId(res.data.id);
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.res.data);
      });
  };

  console.log(pokeDetails);
  console.log(pokedex);

  //  const listTypes = type.map((item, index) => {
  //   return
  // useEffect(() => {
  //   addNewPokemon()
  // }, [pokedex])

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
              <button onClick={() => addNewPokemon(p.id)}>Adicionar</button>
            </div>
          );
        })}
    </div>
  );
};
