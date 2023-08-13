import styled from "styled-components"

export const Container = styled.section`
    text-align: center;
    padding: 14.25rem 0 15rem;
    margin: 0 auto;
    width: 95%;
    
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

        span{
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

`

export const Botoes = styled.ul`
    display: flex;
    gap: 18px;
    justify-content: center;

    li {
        list-style: none;

        a {
            color: #2F2E41;
            font-size: .875rem;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            width: 118px;
            padding: .75rem 0;
            border: 2px solid #2F2E41;
            border-radius: 8px;
    
            svg {
                width: 22px;
                height: 22px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        li {
            a{
                font-size: 1rem;
                width: 146px;
                padding: 1rem 0;

                svg {

                }
            }
        }
    }
`


