import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";



export const DetailsContainer = styled.main`
`
export const ImgTop = styled.img`
`
export const BoxImg = styled.div`
`
export const BoxStats = styled.div`
`
export const statsBar = styled.div`
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