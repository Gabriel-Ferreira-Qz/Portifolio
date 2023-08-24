import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";

export const Container = styled(Element)`
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 80%;
    margin: 0 auto;
    position: relative;

    section {
        display: flex; 
        flex-direction: column;
        gap: 10px;

        h2{
            color: #4A62DF;
        }

        div{
            p {
                margin-bottom: 1rem;
                font-size: .875rem;
                font-weight: 500;
            }
        }

    }

    @media screen and (min-width: 768px) {
        gap: 32px;
        width: 65%;

        section {
            gap: 20px;

            h2 {
                font-size: 2.25rem
            }

            div {
                p { 
                    margin-bottom: 1.25rem;
                    font-size: 1rem;
                }
            }
        }
    }

    @media screen and (min-width: 1220px) {
        padding: 7.5rem 0;
        display: grid;
        grid-template-columns: auto 1fr;
        width: 73%;
        gap: 84px;

        section {
            gap: 10px;
    
            div{
                p {
                    margin-bottom: .75rem;
                }
            }
    }
`

const animation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
`

export const BtnCurrriculo = styled.a`
    text-decoration: none;
    width: 60%; 
    margin: 0 auto;
    padding: .75rem 0;
    font-size: .875rem;
    font-weight: 600;
    color: #2F2E41;
    background-color: transparent;
    border: 2px solid #2F2E41;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    overflow: hidden;
    transition-duration: 0.3s;
    position: relative;
    z-index: 10;

    svg { 
        width: 18px;
        height: 18px;
    }

    &::before {
        width: 100%;
        height: 130px;
        position: absolute;
        content: "";
        border-radius: 50%;
        left: -100%;
        top: 50%;
        transition-duration: 0.3s;
        background-color: #2f2e41;
        mix-blend-mode: color-dodge;
    }

    &:hover::before {
        transition-duration: 0.3s;
        transform: translate(100%, -50%);
        border-radius: 0;
    }

    &:hover {
        color: #FBFAFA;

        svg{
            animation: ${animation} .6s;
        }
    }

    @media screen and (min-width: 768px) {
        padding: 1rem;
        font-size: 1rem;

        svg { 
            width: 20px;
            height: 20px;
        }
    }

    @media screen and (min-width: 1220px) {
        margin: 0;
    }

`

export const CircluloRoxo = styled.div`
    width: 385px;
    height: 419px;
    border-radius: 419px;
    background: #AE8FE3;
    filter: blur(150px);
    position: absolute;
    top: 0;
    z-index: -1;
    left: -45%;

    @media screen and (min-width: 768px) {
        filter: blur(200px);
        top: 18%;
        left: -24%;
    }

    @media screen and (min-width: 1220px) {
        width: 275px;
        height: 266px;
        filter: blur(70px);
        left: 0;
    }
`

export const CircluloAzul = styled.div`
    width: 284px;
    height: 317px;
    border-radius: 419px;
    background: #79E3CA;
    filter: blur(116px);
    position: absolute;
    top: 26%;
    z-index: -1;
    right: 0;

    @media screen and (min-width: 768px) {
        top: 30%;
    }

    @media screen and (min-width: 1220px) {
        width: 275px;
        height: 266px;
        filter: blur(100px);
        top: 45%;
        right: 54%;
    }
`