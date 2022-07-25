import { render } from "@testing-library/react";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { GlobalContextState } from "../../Context/globalContextState";
import { TypeLabel, ImgContainer, ContainerCard } from "./PokedexStyle";
import { goToDetails } from "../../Router/Coordinator";

export const Pokedex = () => {
  const { pokeDetails, setPokeDetails, pokedex, setPokedex, pokeId } =
    useContext(GlobalContextState);
  
  const navigate = useNavigate();

  const getPokedex = () => {
    setPokedex(JSON.parse(localStorage.getItem("pokedex")));
  };

  useEffect(() => {
    getPokedex();
  }, []);

  const removePokedex = (id) => {
    const index = pokedex.findIndex((i) => pokedex[i] === pokeDetails);
    const arrayPokedex = [...pokedex];

    arrayPokedex.splice();
  };

  console.log(pokedex);

  const renderPokedex =
    pokeDetails &&
    pokeDetails
      .filter((p) => {
        return pokedex.includes(p.name);
      })
      .map((p) => {
        return (
          <ContainerCard key={p.id} type={p.types[0].type.name}>
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
              {" "}
              Detalhes
            </button>
            <button>Remover</button>
          </ContainerCard>
        );
      });

  //   if(pokeDetails)

  // };

  return (
    <div>
      <Header page={"pokedex"} />
      {renderPokedex}
    </div>
  );
};
