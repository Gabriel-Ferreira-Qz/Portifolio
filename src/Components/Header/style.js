import styled from "styled-components";

export const Cabecalho = styled.header`
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background: ${props => (props.$isscrolled ? 'linear-gradient(135deg, #FBFAFA 0%, #AE8FE3 100%);' : 'transparent')};
    box-shadow: ${props => (props.$isscrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
    z-index: 99999;

    img {
        margin-left: 1.875rem;
    }

    svg {
        color: #2F2E41;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 10;
        margin-right: 1.875rem;
    }

    @media screen and (min-width: 768px) {
        padding: 1.25rem 0;

        img {
            margin-left: 3.125rem;
        }
    
        svg {
            margin-right: 3.125rem;
        }
    }

    @media screen and (min-width: 1220px) {
        img {
            margin-left: 4rem;
        }

        svg {
            display: none;
        }
    }
`

export const Nav = styled.div`
    display: none;
    margin-right: 4rem;

    ul {
        list-style: none;
        display: flex;
        gap: 24px;

        li{
            a{
                font-size: 1rem;
                color: #2F2E41;
                text-decoration: none;
                font-weight: 600;
                cursor: pointer;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #2F2E41;
                    transform: scaleX(0);
                    transition: transform 0.3s ease 0s;
                }   

                &:hover::after {
                    transform: scaleX(1);
                }
            }
        }
    }
    
    @media screen and (min-width: 1220px) {
        display: flex;
        gap: 50px;
        align-items: center;
    }
`

export const BtnContato = styled.a`
    text-decoration: none;
    background-color: #2F2E41;
    color: #FBFAFA;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;



    &:hover {
        background-color: #312d6b;
        transition: 0.3s ease;
    }
`