import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";

export const ContainerCard = styled.div`
  height: 210px;
  width: 440px;
  border-radius: 12px;
  display: flex;
  background: green;
  p {
    margin: 0;
    font-size: 10px;
  }
  h2 {
    margin: 0;
  }
`;

export const CardBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    height: 30px;
    width: 100px;
  }
`;

export const TypeBox = styled.div`
  display: flex;
`;

export const CardBox2 = styled.div``;

export const ImgContainer = styled.img`
  height: 190px;
  width: 190px;
`;

export const TypeLabel = styled.div`
  background: ${(props) => typeColor[props.type]};
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  color: #ffff;
  border: 1px dashed white;

  img {
    width: 21px;
    height: fit-content;
  }
`;
