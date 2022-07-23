import React, { useContext, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { GlobalContextState } from "../../Context/globalContextState";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { pokedex } from "../../Pages/Pokedex/Pokedex";
import { urlBase } from "../../Constants/url";

export default function card(props) {
  const { pokedex, setPokedex, pokeType, pokeId } =
    useContext(GlobalContextState);
}

const addNewPokemon = () => {
  const addToPokedex = [...pokedex, pokeAdd];
  setPokedex(addNewPokemon);
};

const getCardPokemon = () => {
  axios.get(`${urlBase}/${props.name}`).then((res) => {
    setPokeType(res.data.types);
    setPokeId(res.data.id);
    setPokemon(res.data);
  });
};

useEffect(() => {
  getCardPokemon();
}, []);

// const listTypes = type.map((item, index) => {
//   return
