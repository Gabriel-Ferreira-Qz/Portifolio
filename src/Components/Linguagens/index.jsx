import HTML from "../../Assets/html.svg"
import CSS from "../../Assets/css.svg"
import JavaScript from "../../Assets/javascript.svg"
import React from "../../Assets/react.svg"
import Tailwindcss from "../../Assets/tailwindcss.svg"
import SASS from "../../Assets/sass.svg"
import StyledComponents from "../../Assets/styled-components.svg"
import Bootstrap from "../../Assets/bootstrap.svg"

import { Container } from "./style"

export default function Linguagens() {

    const tecnologias = [
        {
            nome: "HTML",
            img: HTML,
            alt: "Logo do 'HTML'"
        },
        {
            nome: "CSS",
            img: CSS,
            alt: "Logo do 'CSS'"
        },
        {
            nome: "JavaScript",
            img: JavaScript,
            alt: "Logo do 'JavaScript'"
        },
        {
            nome: "React",
            img: React,
            alt: "Logo  do 'React'"
        },
        {
            nome: "Tailwindcss",
            img: Tailwindcss,
            alt: "Logo do 'Tailwindcss'"
        },
        {
            nome: "SASS",
            img: SASS,
            alt: "Logo do 'SASS'"
        },
        {
            nome: "Styled-Components",
            img: StyledComponents,
            alt: "Logo do 'Styled-Components'"
        },
        {
            nome: "Bootstrap",
            img: Bootstrap,
            alt: "Logo do 'Bootstrap'"
        }
    ]

    return(
        <Container>
            <h2>Linguagens</h2>

            <section>
                {tecnologias.map((tecnologias, k) => (
                    <div key={k}>
                        <img src={tecnologias.img} alt={tecnologias.alt} />
                    </div>
                ))}
            </section>

        </Container>
    )
}