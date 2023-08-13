import styled from "styled-components";

export const Container = styled.div`
    padding: 1.85rem 0 5rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    h2 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 3.75rem;

        span {
            color: #4A62DF;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 80px;

        div {

            img {
                width: 100%
            }
        }
    }
`

export const CircluloRoxo = styled.div`
    width: 510px;
    height: 579px;
    border-radius: 419px;
    background: #AE8FE3;
    filter: blur(141px);
    position: absolute;
    top: 260%;
    z-index: -1;
    right: 50%;
`

export const CircluloAzul = styled.div`
    width: 332px;
    height: 427px;
    border-radius: 419px;
    background: #79E3CA;
    filter: blur(150px);
    position: absolute;
    top: 224%;
    z-index: -1;
    right: 0;
`

export const CircluloAzulSecundario = styled.div` 
    width: 269px;
    height: 326px;
    border-radius: 419px;
    background: #79E3CA;
    filter: blur(150px);
    position: absolute;
    top: 359%;
    z-index: -1;
    right: 0;
`