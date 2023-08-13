import styled from "styled-components";

export const Cabecalho = styled.header`
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background: ${props => (props.$isscrolled ? 'linear-gradient(135deg, #FBFAFA 0%, #AE8FE3 100%);' : 'transparent')};
    box-shadow: ${props => (props.$isscrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};

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
        padding: 2rem 0;

        img {
            margin-left: 3.125rem;
        }
    
        svg {
            margin-right: 3.125rem;
        }
    }
`