import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Promocao = styled.section`
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
}
`
export const Center = styled.div`
width: 70vw;
${center}
justify-content: space-around;
`
export const Card = styled.div`
height: 40vh;
text-align: center;
background-color: white;
border-radius: 13px;
p{
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`
export const Banner = styled.section`
    border: black 2px solid;
    background-color: #FBC42B;
    height: 600px;
    padding-top: 60px;
`
export const Outdoor = styled.div`
    /* border: black 2px solid; */
    ${center}
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const Bigmac = styled.div`
    /* border: black 2px solid; */
    height: 350px;
    ${center}
    img{
        width: 300px;
        
    }
`
export const Bateufome = styled.div`
    /* border: black 2px solid; */
    height: 150px;
    ${center}
`
export const MenuSelect = styled.div`
    /* border: black 2px solid; */
    ${center};
    
    /* display: flex;
    justify-content: space-evenly; */
    img{
        /* border: black 2px solid; */
        margin-inline:30px;
        height: 100px;
        width: 100px;
    }
`