import styled from "styled-components";
import { typeColor } from "../../Constants/typeColor";




export const DetailsContainer = styled.main`
background: #5E5E5E;
width:100vw;
height:120vh;
display flex;
flex-direction: column;
align-items: center;


 
`
export const ContainerDetCard = styled.div`
display:grid;
grid-template-columns: 2fr 2fr 2fr 1fr;
height: 660px;
width: 1389px;
border-radius: 37px;
background: ${(props) => typeColor[props.type]};

`

export const BoxImg = styled.div`
  height: 613px;
  width: 300px;
  display:flex;
  flex-direction: column;
  gap:10px;
  margin-top:50px;
  margin-left:20px;

  img{
    height: 282px;
    width: 282px;
    left: 44px;
    top: 26px;
    border-radius: 8px;
    background-color: #fff;
    margin-left:20px;
    

  }
`
export const BoxStats = styled.div`
height: 570px;
width: 350px;
left: 360px;
top: 24px;
border-radius: 12px;
background-color: #fff;
text-align:center;
margin-top:50px;

 p{
  font-size:10px;
 }


`
export const PoStats = styled.div`
display:grid;
justify-content: center;
align-items: center;
grid-template-columns: 3fr 1fr 6fr ;
padding-right: 15px;


`
export const LinearProgress = styled.div`
  
`

export const Box3 = styled.div`
height: 613px;
width: 350px;
margin-top:50px;
margin-left:20px;
  h4{
    margin:0
  }
  h1 {
    margin:0
  }
`

export const BoxType = styled.div`
  display:flex;
  gap:10px;
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
height: 350px;
width: 300px;
border-radius: 8px;
background: #FFFFFF;
padding-left:20px;



`
export const PoMoves = styled.div`

height: 40px;
text-align:center;
width 200px;
background:#D9DDDD;
border-radius: 8px;
     

`
export const ImgTop = styled.div`
    margin:0;
    padding:0;
    img{
      height: 270px;
      width: 270px;
      margin-top: -150px;
    }


`