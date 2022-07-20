
import React, { useContext } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import PokemonTypes from '../../Components/PokeTypes/PokemonTypes';
import { Header } from "../../Components/Header/Header";


export const Home = () => {

const textinho = useContext(GlobalContextState);

  return (
    <div>
       <Header page={"home"} />
       <PokemonTypes/>
        <div>{textinho}</div>

    </div>
  );

};
