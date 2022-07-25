import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContextState } from "../../Context/globalContextState";
import { ButtonAdd, ButtonRemove } from "./ButtonsDetailsStyle";

export const ButtonDetails = () => {
  const { pokeId, setPokedex, pokedex } = useContext(GlobalContextState);
  const { name } = useParams();

  const addNewPokemon = (id) => {
    const arrayPokedex = [...pokedex];
    if (arrayPokedex.includes(id)) {
    } else {
      arrayPokedex.push(id);
      setPokedex(arrayPokedex);
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
  };

  const RenderButtonDetails = () => {
    if (pokedex.includes(name)) {
      return <ButtonRemove>Remover</ButtonRemove>;
    } else {
      return <ButtonAdd onClick={()=> addNewPokemon(name)}>Adicionar</ButtonAdd>;
    }
  };

  return <>{RenderButtonDetails()}</>;
};
