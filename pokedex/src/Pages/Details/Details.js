import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { useNavigate, useParams } from "react-router-dom"
import { LinearProgress } from "@mui/material";
import { DetailsContainer, ContainerDetCard, ImgTop, BoxImg, BoxStats, PoStats, Box3, BoxMoves, PoMoves, TypeLabel, BoxType } from '../Details/styled'
import { useRequestedData } from "../../Hooks/useRequestedData";




export const Details = () => {
  const { name } = useParams()
  const [pokemon] = useRequestedData(`${name}`)
  const pokeType = pokemon && pokemon?.types[0]?.type?.name;

  console.log(pokemon)

  const pokeTypes = pokemon && pokemon.types.map((p) => {
    return (
      <TypeLabel key={p.id} type={p.type.name}>
        <img src={`/type-vectors/${p.type.name}.svg`} alt={p.type.name} />
        <p>{p.type.name}</p>
      </TypeLabel>
    )
  })
  const pokeStats = pokemon && pokemon.stats.map((p) => {
    return (
      <PoStats key={p.id}>

        <p>{p.stat?.name.toUpperCase()}</p>
        <p>{p.base_stat}</p>
        <LinearProgress
          variant="determinate"
          value={p.base_stat / 1}
          type={pokeType}
        />

      </PoStats>
    )
  })
  const pokeMoves = pokemon && pokemon.moves.slice(0, 4).map((p) => {
    return (
      <PoMoves key={p.id}>
        <p>{p.move?.name.toUpperCase()}</p>
      </PoMoves>
    )
  })

  return (
    <div>
      <Header page={`details/${name}`} />
      {pokemon && (
        <DetailsContainer>
          <h1>Detalhes</h1>
          <ContainerDetCard type={pokeType}>
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
            <BoxStats>
              <h2>Base Stats</h2>
              {pokeStats}
            </BoxStats>
            <Box3>
              <h4># {pokemon?.id}</h4>
              <h1>
                {pokemon?.name[0].toUpperCase()}
                {pokemon.name.slice(1)}
              </h1>
              <BoxType>
                {pokeTypes}
              </BoxType>
              <BoxMoves>
                <h2>Moves</h2>
                {pokeMoves}
              </BoxMoves>
            </Box3>
            <ImgTop key={pokemon.id}>
              <img src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}/>
            </ImgTop>
          </ContainerDetCard>

        </DetailsContainer>
      )}

    </div>
  );
};
