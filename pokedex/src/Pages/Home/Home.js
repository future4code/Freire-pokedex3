import React, { useContext } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { Header } from "../../Components/Header/Header";
import { CardPokemon } from "../../Components/CardPokemon/CardPokemon";
import { HomeContainer } from "./styled";

export const Home = () => {
  return (
    <div>
      <Header />
      <HomeContainer>
        <CardPokemon />
      </HomeContainer>
    </div>
  );
};
