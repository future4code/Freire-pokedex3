import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedex } from "../../Router/Coordinator";
import {
  ContainerHeader,
  ButtonPokedex,
  ButtonRemove,
  LogoHeader,
  TextReturn,
} from "./HeaderStyle";
import pokelogo from "../../assets/img/Pokelogo.svg";
import arrow from "../../assets/img/Arrow.svg";
import { ButtonDetails } from "./ButtonsDetails";

export const Header = (props) => {
  const page = props.page;
  const navigate = useNavigate();

  const RenderHeader = () => {
    switch (page) {
      case "pokedex":
        return (
          <ContainerHeader>
            <TextReturn>
              <img src={arrow} alt="seta de indicação" />
              <p onClick={() => goToHomePage(navigate)}>
                <u>Todos Pokémons!</u>
              </p>
            </TextReturn>
            <LogoHeader src={pokelogo} alt="logo pokemon" />
          </ContainerHeader>
        );

      case "details":
        return (
          <ContainerHeader>
            <TextReturn>
              <img src={arrow} alt="seta de indicação" />
              <p onClick={() => goToHomePage(navigate)}>
                <u>Todos Pokémons!</u>
              </p>
            </TextReturn>
            <LogoHeader src={pokelogo} alt="logo pokemon" />
            <ButtonDetails/>
             
          </ContainerHeader>
        );

      default:
        return (
          <ContainerHeader>
            <LogoHeader src={pokelogo} alt="logo pokemon" />
            <ButtonPokedex onClick={() => goToPokedex(navigate)}>
              Pokedex
            </ButtonPokedex>
          </ContainerHeader>
        );
    }
  };

  return <div>{RenderHeader()}</div>;
};
