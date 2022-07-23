import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContextState } from "../../Context/globalContextState";
import { ButtonAdd, ButtonRemove } from "./ButtonsDetailsStyle";




export const ButtonDetails = () => {

  const { pokeId, setPokedex} = useContext(GlobalContextState)
  const {name} = useParams()

  const pokedex = ['bulbasaur', 'squirtle']
  
  
  console.log(pokeId)
  console.log(pokedex)
    

  const RenderButtonDetails = () => {

    if(pokedex.includes(name)) {
        return (
            <ButtonRemove>Remover</ButtonRemove>
        )
    } else {
        return (
            <ButtonAdd>Adicionar</ButtonAdd>
        )
    }

  }




    return(
        <>
        {RenderButtonDetails()}
        </>
    )





}