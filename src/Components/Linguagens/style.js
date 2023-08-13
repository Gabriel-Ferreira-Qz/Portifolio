import styled from "styled-components";

export const Container = styled.section`
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

    section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;

        div {
            img {
                width: 80px;
            }
        }
    }
`