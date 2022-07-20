import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";

export const TypeButton = styled.button`
    background: ${(props) => typeColor[props.type]};

`