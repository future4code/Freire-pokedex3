import { useState, useEffect } from "react";
import axios from "axios";
import { urlBase } from "../Constants/url";

export const useRequestedData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const [dataDetails, setDataDetails] = useState([]);

  
  const getData = async () => {
    try {
      const res = await axios.get(`${urlBase}/${endpoint}`);
      setData(res.data);
    } catch (err) {
      console.log(err.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, [endpoint]);
  
  // let pokemonList = [];

  // useEffect(() => {
  //   data.map((p) => {
  //     const getPokemon = async () => {
  //       try {
  //         const res = await axios.get(`${urlBase}/${p.name}/`);
  //         pokemonList.push(res.data);
  //         if (pokemonList.length === 20) {
  //           setDataDetails(pokemonList);
  //         }
  //       } catch (err) {
  //         console.log(err.data.message);
  //       }
  //     };
  //     return getPokemon();
  //   });
  // }, [data]);

   return [data]
};
