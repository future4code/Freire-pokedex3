import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";




export const DetailsContainer = styled.main`
background: #5E5E5E;
display: flex;
flex-direction: column;
align-items: center;


 
`
export const ContainerDetCard = styled.div`
display:grid;
grid-template-columns: 3fr 3fr 3fr 1fr;
height: 663px;
width: 1389px;
border-radius: 37px;
background: white;
padding: 20px;


`

export const BoxImg = styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;

  img{
    height: 282px;
    width: 282px;
    left: 44px;
    top: 26px;
    border-radius: 8px;
    background-color: #fff;
    margin-left:20px;
    border: 1px solid red;

  }
`
export const BoxStats = styled.div`
height: 613px;
width: 343px;
left: 360px;
top: 24px;
border-radius: 12px;

`
export const PoStats = styled.div`
display:grid;
justify-content: center;
align-items: center;
grid-template-columns: 3fr 1fr 6fr ;

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

export const Box3 = styled.div`
`

export const TypeLabel = styled.div`
    background: ${(props) => typeColor[props.type]};
    width:100px;
    height:40px;
    display:flex;
    align-items: center ;
    justify-content:space-evenly ;
    border-radius:8px ;
    color:#ffff;
    border: 1px dashed white;

    img{
        width:21px;
        height: fit-content;

    }

`

export const BoxMoves = styled.div`
height: 453px;
width: 292px;
left: 771px;
top: 184px;
border-radius: 8px;
background: #FFFFFF;


`
export const PoMoves = styled.div`

`
export const ImgTop = styled.img`
height: 270px;
width: 270px;
margin-top: -150px;


`