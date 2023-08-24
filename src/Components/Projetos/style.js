import { Element } from "react-scroll";
import styled from "styled-components";

export const Container = styled(Element)`
    padding: 1.85rem 0 5rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    position: relative;

    h2 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 3.75rem;

        span {
            color: #4A62DF;
        }
    }

    @media screen and (min-width: 768px){
        width: 80%;

        h2 {
            font-size: 2.25rem;
        }
    }

    @media screen and (min-width: 1220px) {
        h2 {
            margin-bottom: 6.25rem;
        }
    }
`

export const Galeria = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 80px;

    li {
        list-style: none;
    }

    @media screen and (min-width: 1220px) {
        display: grid;
        grid-template-columns: 45% 45%;
        justify-content: center;
        gap: 100px;
    }
`

export const CircluloRoxo = styled.div`
    width: 510px;
    height: 579px;
    border-radius: 419px;
    background: #AE8FE3;
    filter: blur(141px);
    position: absolute;
    top: 33%;
    z-index: -1;
    left: -66%;

    @media screen and (min-width: 768px) {
        left: -41%;
    }

    @media screen and (min-width: 1220px) {
        width: 517px;
        height: 585px;
        filter: blur(275px);
        top: 40%;
        left: -20%;
    }
`

export const CircluloAzul = styled.div`
    width: 332px;
    height: 427px;
    border-radius: 419px;
    background: #79E3CA;
    filter: blur(150px);
    position: absolute;
    top: 0%;
    z-index: -1;
    right: 0;

    @media screen and (min-width: 1220px) {
        width: 417px;
        height: 500px;
        filter: blur(225px);
        top: 10%;
    }
`

export const CircluloAzulSecundario = styled.div` 
    width: 269px;
    height: 326px;
    border-radius: 419px;
    background: #79E3CA;
    filter: blur(150px);
    position: absolute;
    top: 80%;
    z-index: -1;
    right: 0;

    @media screen and (min-width: 768px) {
        width: 400px;
        height: 400px;
    }

    @media screen and (min-width: 1220px) {
        display: none;
    }
`