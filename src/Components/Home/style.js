import { Element } from "react-scroll"
import styled, { keyframes } from "styled-components"

export const Container = styled(Element)`
    height: 100vh;
    text-align: center;
    background: linear-gradient(to bottom left, transparent 34%, #79E3CA 141%),
                linear-gradient(to top right, transparent 34%, #AE8FE3 120%);
`

export const Descricao = styled.div`
    margin: 0 auto;
    width: 95%;
    padding: 14.25rem 0 0;

    h3 {
        font-size: 1rem;
        color: #4A62DF;
        font-weight: 700;
    }

    h1 {
        font-size: 1.875rem;
    }

    h2 {
        font-size: 1.5rem;

        span {
            color: #4A62DF;
        }
    }

    p {
        font-size: .875rem;
        font-weight: 600;
        margin: 1rem auto;
        width: 90%;

        span {
            color:#4A62DF;
        }
    }

    @media screen and (min-width: 768px) {
        h3 {
            font-size: 1.125rem;
        }

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1rem;
            margin: 1rem auto 1.5rem auto;
            width: 65%;

        }
    }

    @media screen and (min-width: 1220px) {
        padding: 10.625rem 0 0;

        h3 {
            font-size: 1.125rem;
        }
    
        h1 {
            font-size: 3.125rem;
        }
    
        h2 {
            font-size: 3.125rem;
        }
    
        p { 
            font-size: 1rem;
            width: 40%;
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

export const Botoes = styled.ul`
    display: flex;
    gap: 18px;
    justify-content: center;

    li {
        list-style: none;

        a {
            color: #2f2e41;
            font-size: 0.875rem;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            width: 118px;
            padding: 0.75rem 0;
            border: 2px solid #2f2e41;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
            transition-duration: 0.3s;
            z-index: 10;

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

            svg {
                width: 22px;
                height: 22px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        gap: 30px;

        li {
            a {
                font-size: 1rem;
                width: 146px;
                padding: 1rem 0;
            }
        }
    }
`
