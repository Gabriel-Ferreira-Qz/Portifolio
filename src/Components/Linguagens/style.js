import { Element } from "react-scroll";
import styled from "styled-components";

export const Container = styled(Element)`
    padding: 1.875rem 0 5rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    h2 {
        margin-bottom: 3.75rem;
        color: #4A62DF;
        font-size: 1.875rem;
        font-weight: 700;
    }

    @media screen and (min-width: 1220px) {
        h2 {
            margin-bottom: 5rem;
        }
    }
   
`

export const Tecnologias = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        max-width: 80px;


        img {
            width: 80px;
            transition: all .3s;
    
            &:hover {
                filter: brightness(80%);
                opacity: .86;
                transform: scale(.9);
            }
        }

        span {
            background-color: #2F2E41;
            color: #FBFAFA;
            padding: .125rem .25rem;
            border-radius: 4px;
            font-size: .875rem;
            opacity: 0;
            transition: transform 0.3s;
            transform: translateY(10px);
        }

        &:hover span {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (min-width: 768px) {
        gap: 80px;

        div {
            max-width: 100px;
            img {
                width: 100px;
            }
        }
    }

    @media screen and (min-width: 1220px) {
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: center;
        gap: 100px;
    }
`