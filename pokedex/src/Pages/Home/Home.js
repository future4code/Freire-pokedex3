import React, { useContext } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { Header } from "../../Components/Header/Header";
import {CardPokemon} from "../../Components/CardPokemon/CardPokemon";

export const Home = () => {
  
  return (
    <div>
      <Header />
      <CardPokemon/>         
    </div>
  );
};
