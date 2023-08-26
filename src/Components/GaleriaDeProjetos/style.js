import styled from "styled-components"

export const Descricao = styled.div`
    position: absolute;
    width: 100%;
    top: 45%;
    transform: translateY(100%);
    z-index: 20;
    opacity: 0;
    transition: transform 450ms, opacity 300ms;
    color: #FBFAFA;
    
    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1rem;
        margin: .625rem 0 .75rem;
    }

    p {
        display: none;
    }

    div {
        display: flex;
        gap: 16px;
        justify-content: center;
        
        a{
            width: 35px;
            height: 35px;

            svg {
                color: #FBFAFA;
                width: 35px;
                height: 35px;

                &:hover {
                    opacity: .7;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        text-align: start;
        max-width: 80%;
        left: 10%;

        h5 {
            margin: 0;
        }

        p {
            display: inline-block;
            margin: 1rem 0;
        }

        div {
            justify-content: start;
        }
    }
`

export const Container = styled.div`
    &:hover div:before {
        transform: translateY(0);
        opacity: .7;
    }
            
    &:hover img {
        transform: scale(1.07);
        filter: blur(5px);
    }

    &:hover ${Descricao} {
        opacity: 1;
        transform: translateY(-50%);
    }
    
    & > div {   
        border-radius: 16px;
        position: relative;
        overflow: hidden;
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #1c1d25;
            opacity: 0;
            transition: all .45s;
            z-index: 10;
            transform: translateY(100%);
        }
    
        img {
            width: 100%;
            position: relative;
            border-radius: 16px;
        }
    }
`