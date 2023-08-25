import styled from "styled-components";

const Teste = styled.p`
    &:after{
        content: '🦄';
    }
`


export default function Before() {
    return(
        <div>
            <Teste>teste</Teste>
        </div>
    )
}