import styled from "styled-components";

export const Container = styled.section`
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 80%;
    margin: 0 auto;

    section {
        display: flex; 
        flex-direction: column;
        gap: 10px;

        h2{
            color: #4A62DF;
        }

        div{
            p {
                font-size: .875rem;
                font-weight: 500;
            }
        }

    }

    button {
        width: 50%;
        margin: 0 auto;
        padding: .75rem 0;
        font-size: .875rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        color: #2F2E41;
        background-color: transparent;
        border: 2px solid #2F2E41;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;

        svg { 
            width: 18px;
            height: 18px;
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

            p {
                font-size: 1rem;
            }

            div {
                p { 
                    margin-bottom: 1.25rem;
                }
            }

        }

        button {
            padding: 1rem;
            font-size: 1rem;

            svg { 
                width: 20px;
                height: 20px;
            }
        }
    }
`

export const CircluloRoxo = styled.div`
    width: 385px;
    height: 419px;
    border-radius: 419px;
    background: #AE8FE3;
    filter: blur(150px);
    position: absolute;
    top: 120%;
    z-index: -1;
    left: -45%;

    @media screen and (min-width: 768px) {
        filter: blur(200px);
        position: absolute;
        top: 142%;
        z-index: -1;
        left: -24%;
    }
`

export const CircluloAzul = styled.div`
    width: 284px;
    height: 317px;
    border-radius: 419px;
    background: #79E3CA;
    filter: blur(116px);
    position: absolute;
    top: 131%;
    z-index: -1;
    right: 0;

`