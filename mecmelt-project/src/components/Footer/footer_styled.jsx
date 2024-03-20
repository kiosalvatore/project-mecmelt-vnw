import styled,{css} from "styled-components"

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    height: 90px;
    background-color: #FFFFFF ;
    display: flex;
    justify-content: space-between;

`
export const CopyRight = styled.div`
    /* border: 2px solid black; */
    width: 15%;
    display: flex;
    margin-left: 20px;
    justify-content: space-evenly;
    align-items: center;
    img{
        height: 25px;
    }
    p{
        /* padding-right:15px; */
    }

`

export const Appstore = styled.div`
    /* border: 2px solid red; */
    ${center}
    width: 35%;
    justify-content: space-evenly;
    img{
        height: 50px;
    }

`

