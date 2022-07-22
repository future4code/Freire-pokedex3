import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom"
import { DetailsContainer, DetH1, ImgTop, BoxImg, BoxStats, statsBar, BoxMoves, TypeLabel } from '../Details/styled'


export const Details = () => {
  const {name} = useParams()
  const {pokeDetails} = useContext(GlobalContextState)
  

  
  const pokemon = pokeDetails && pokeDetails.filter((p)=>{
    if (name === p.name){
      return(true)
    }
  })

  
  const pokeImgTop = pokemon && pokemon.map((p)=>{
    return(
       <ImgTop key={p.id}
          src={p.sprites.other["official-artwork"].front_default}
          alt={p.name}
        />           
    )
  })
  
  const pokeImgFB = pokemon && pokemon.map((p)=>{
    return(
      <BoxImg key={p.id}>
            <img
              src={p.sprites.front_default}
              alt={`${pokemon.name} front`}
            />
            <img
              src={p.sprites.back_default}
              alt={`${pokemon.name} back`}
            />
          </BoxImg>
    )
  })
  
  

 
  return (
    <div>
      {/* <Header page={"details"}/> */}
      <DetailsContainer>
        <DetH1>Detalhes</DetH1>
      {pokeImgFB}
      {pokeImgTop}
      </DetailsContainer>
      
    </div>
  );
};
