import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";




export const DetailsContainer = styled.main`
 
`
export const DetH1 = styled.h1`

`
export const ImgTop = styled.img`
`
export const BoxImg = styled.div`
`
export const BoxStats = styled.div`
`
export const LinearProgress = styled.div`
  width: 60%;
  background: #f0f0f0;
  height: 0.6rem;
  position: relative;
  top: 0.8rem;
  border-radius: 0.5rem;

  :after {
    content: "";
    height: 0.6rem;
    width: ${(props) => props.baseStat + "%"};
    background: ${(props) => typeColor[props.type]};
    position: absolute;
    border-radius: 0.5rem;
  }
`
export const BoxMoves = styled.div``

export const TypeLabel = styled.div`
    background: ${(props) => typeColor[props.type]};
    width:100px;
    height:40px;
    display:flex;
    align-items: center ;
    justify-content:space-evenly ;
    border-radius:8px ;
    color:#ffff;
    border: 1px dashed ${typeColor.dragon};

    img{
        width:21px;
        height: fit-content;

    }

`