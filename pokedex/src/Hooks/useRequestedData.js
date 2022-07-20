import { useState, useEffect } from "react";
import axios from "axios";
import { urlBase } from "../Constants/url";

export const useRequestedData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const getData = () => {
    axios
      .get(`${urlBase}${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [endpoint]);

  return [data, getData];
};
