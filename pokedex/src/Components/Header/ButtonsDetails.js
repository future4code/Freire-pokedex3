import React, { useContext, useEffect, useState } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { ButtonAdd, ButtonRemove } from "./ButtonsDetailsStyle";




export const ButtonDetails = () => {

  const { pokeId, pokedex, setPokedex} = useContext(GlobalContextState)
  
  
  console.log(pokeId)
  console.log(pokedex)
  

  const RenderButtonDetails = () => {

    if(pokedex.includes(pokeId)) {
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