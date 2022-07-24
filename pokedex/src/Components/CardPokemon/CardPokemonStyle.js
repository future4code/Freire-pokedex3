import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";

export const ImgContainer = styled.img`
  height: 200px;
  width: 200px;
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
