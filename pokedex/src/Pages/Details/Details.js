import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom"
import { LinearProgress } from "@mui/material";
import { DetailsContainer, DetH1, ImgTop, BoxImg, BoxStats, BoxMoves, TypeLabel } from '../Details/styled'


export const Details = () => {
  const {name} = useParams()
  const {pokeDetails} = useContext(GlobalContextState)
  
  

  
  const pokemon = pokeDetails && pokeDetails.filter((p)=>{
    return(name === p.name)
  })

  console.log(pokemon)
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
  
  
  const pokeStats = pokemon && pokemon.map((p)=>{
    return(
      <BoxStats key={p.id}>
        <h2>Base Stats</h2>
        <p>{p.stats[0].stat.name}</p>
        <p>{p.stats[0].base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.stats[0].base_stat / 1.5}
        />
        <p>{p.stats[1].stat.name}</p>
        <p>{p.stats[1].base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.stats[1].base_stat / 1.5}
        />
        <p>{p.stats[2].stat.name}</p>
        <p>{p.stats[2].base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.stats[3].base_stat / 1.5}
        />
        <p>{p.stats[3].stat.name}</p>
        <p>{p.stats[3].base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.stats[3].base_stat / 1.5}
        />
        <p>{p.stats[4].stat.name}</p>
        <p>{p.stats[4].base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.stats[4].base_stat / 1.5}
        />
        <p>{p.stats[5].stat.name}</p>
        <p>{p.stats[5].base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.stats[5].base_stat / 1.5}
        />
      </BoxStats>
    )
  })

  
  

  

 
  return (
    <div>
      <Header page={`details/${name}`}/>
      <DetailsContainer>
        <DetH1>Detalhes</DetH1>
      {pokeImgFB}
      {pokeStats}
      {pokemon &&
      <>
      <h2># {pokemon[0]?.id}</h2>
      <h1>{pokemon[0]?.name}</h1>
      </>}
      

      
      
      </DetailsContainer>
      
    </div>
  );
};
