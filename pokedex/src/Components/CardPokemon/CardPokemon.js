import React, { useContext, useEffect } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { urlBase } from "../../Constants/url";
import { useRequestedData } from "../../Hooks/useRequestedData";
import {
  ImgContainer,
  TypeLabel,
  ContainerCard,
  TypeBox,
  CardBox1,
  CardBox2,
} from "./styled";
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


  console.log(pokeDetails);

  

  useEffect(() => {
    addNewPokemon();
  }, [pokedex]);

  return (
    <>
      {pokeDetails &&
        pokeDetails.map((p) => {
          return (
            <ContainerCard key={p.id} type={p.types[0]?.type?.name}>
              <CardBox1>
                <div>
                  <p>#0{p.id}</p>
                  <h2>{p.name}</h2>
                  <TypeBox>
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
                  </TypeBox>
                </div>
                <button
                  onClick={() => {
                    goToDetails(navigate, p.name);
                  }}
                >
                  Detalhes
                </button>
              </CardBox1>
              <CardBox2>
                <ImgContainer
                  src={p?.sprites?.other["official-artwork"].front_default}
                  alt={p.name}
                />

                <button onClick={() => addNewPokemon(p.name)}>Adicionar</button>
              </CardBox2>
            </ContainerCard>
          );
        })}
    </>
  );
};
