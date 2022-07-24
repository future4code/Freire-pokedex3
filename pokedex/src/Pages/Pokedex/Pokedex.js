import React, { useContext, useEffect } from 'react';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';
import { Header } from '../../Components/Header/Header';
import { GlobalContextState } from '../../Context/globalContextState';

export const Pokedex = ()=>{
  const {pokedex} = useContext(GlobalContextState)     
  console.log(pokedex);

  const getPokdex = () => {

    localStorage.getItem('pokedex')
  }

  useEffect(()=>{
    getPokdex();
  },[])


    
    return (
    <div>
        <Header page={'pokedex'}/>        
        {/* <CardPokemon/> */}
    </div>
  );
};
