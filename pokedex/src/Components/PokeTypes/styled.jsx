import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";

// background: ${(props) => typeColor[props.type]};

export const TypeButton = styled.div`
    background: ${typeColor.grass};
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