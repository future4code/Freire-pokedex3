import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 160px;
  background-color: #ffffff;
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonPokedex = styled.button`
  position: absolute;
  width: 160px;
  height: 40px;
  padding: 4px, 10px, 4px, 10px;
  right: 64px;
  background-color: #33a4f5;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;



export const LogoHeader = styled.img`
  position: absolute;
  left: 40vw;
  width: 307px;
  height: 113px;
`;

export const TextReturn = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 210px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  left: 72px;
  cursor: pointer;
`;
