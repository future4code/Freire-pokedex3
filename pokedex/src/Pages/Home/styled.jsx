import styled from "styled-components";

export const HomeContainer = styled.div`
  

    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #5e5e5e;
    gap: 20px;
    flex-wrap: wrap;
  

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
