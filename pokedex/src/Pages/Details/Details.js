import React, { useContext } from "react";
import { GlobalContextState } from "../../Context/globalContextState";
import { useRequestedData} from '../../Hooks/useRequestedData'
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../Components/Header/Header";
import { DetailsContainer, ImgTop, BoxImg, BoxStats, statsBar, BoxMoves, TypeLabel } from '../Details/styled'

export const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [pokemon] = useRequestedData(`${params.name}/`)
  console.log(pokemon)
  const pokeTypes = pokemon && pokemon.types.map((p) => {
    return (
      <TypeLabel key={p.id}>
        <img src={`../../assets/img/type-vectors/${p.type.name}.svg`} alt={p.type.name} />
        <p>{p.type.name}</p>
      </TypeLabel>
    )
  })
  const pokeStats = pokemon && pokemon.stats.maps((p)=>{
    return(
      <BoxStats key={p.id}>
        <p>{p.stat.name}</p>
        <p>{p.base_stat}</p>
        <statsBar
          baseStats={p.base_stat > 150 ? 150 : p.base_stat}     

        />
      </BoxStats>
    )
  })
  console.log(pokeStats)
  const pokeMoves = pokemon && pokemon.moves.slice(0, 4).map((p) => {
    return (
    <BoxMoves key={p.id}>
      <p>{p.moves.name}</p>
    </BoxMoves>
    )
  })


  return (
    <div>
      <Header/>
      {/* {pokemon && (
        <DetailsContainer>
          <ImgTop
            src={pokemon.sprites.others.official_artwork.front_default}
            alt={pokemon.name}
          />
          <BoxImg>
            <img
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} front`}
            />
            <img
              src={pokemon.sprites.back_default}
              alt={`${pokemon.name} back`}
            />
          </BoxImg>
          {pokeStats}

        </DetailsContainer>
      )} */}
 
     {pokeTypes}
     {pokeStats}
     {pokeMoves}
    </div>
  );
};
