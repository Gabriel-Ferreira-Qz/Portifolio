import { Container, Tecnologias } from "./style"

import HTML from "../../Assets/img-linguagens/html.svg"
import CSS from "../../Assets/img-linguagens/css.svg"
import JavaScript from "../../Assets/img-linguagens/javascript.svg"
import React from "../../Assets/img-linguagens/react.svg"
import Tailwindcss from "../../Assets/img-linguagens/tailwindcss.svg"
import SASS from "../../Assets/img-linguagens/sass.svg"
import StyledComponents from "../../Assets/img-linguagens/styled-components.svg"
import Bootstrap from "../../Assets/img-linguagens/bootstrap.svg"


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

    return (
        <section>
            <Container name="linguagens">
                <h2>Linguagens</h2>

                <Tecnologias>
                    {tecnologias.map((tecnologias, k) => (
                        <div key={k}>
                            <img
                                src={tecnologias.img}
                                alt={tecnologias.alt}
                            />
                            <span>{tecnologias.nome}</span>
                        </div>
                    ))}
                </Tecnologias>

            </Container>
        </section>
    )
}