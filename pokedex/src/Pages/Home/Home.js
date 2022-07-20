
import React from 'react';
import PokemonTypes from '../../Components/PokeTypes/PokemonTypes';
import { Header } from "../../Components/Header/Header";

export const Home = () => {
  return (
    <div>
       <Header page={"home"} />
       <PokemonTypes/>

    </div>
  );
};
