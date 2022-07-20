import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedex } from "../../Router/Coordinator";
import {ContainerHeader, ButtonPokedex, ButtonBack, LogoHeader} from "./HeaderStyle";
import pokelogo from "../../assets/img/pokelogo.png"

export const Header = (props) => {
  const page = props.page;
  const navigate = useNavigate();
  

  const RenderHeader = () => {

    
    if (page === "home") {
      return (
        <ContainerHeader>
          <LogoHeader src={pokelogo} alt='logo pokemon'/>
          <ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokedex</ButtonPokedex>
        </ContainerHeader>
      );
    } else if (page === "pokedex") {
      return (
        <ContainerHeader>
          <LogoHeader src={pokelogo} alt='logo pokemon'/>
          <ButtonBack onClick={() => goToHomePage(navigate)}>Voltar</ButtonBack>
        </ContainerHeader>
      );
    } else {
      <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <LogoHeader src={pokelogo} alt='logo pokemon'/>
        <button onClick={() => goToHomePage(navigate)}>Adicionar</button>
      </div>;
    }
  };

  return <div>{RenderHeader()}</div>;
};
