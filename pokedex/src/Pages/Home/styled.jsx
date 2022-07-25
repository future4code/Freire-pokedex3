import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  background-color: #5e5e5e;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
