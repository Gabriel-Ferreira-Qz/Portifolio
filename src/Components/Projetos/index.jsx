import { CircluloAzul, CircluloAzulSecundario, CircluloRoxo, Container } from "./style"

import Meteora from "../../Assets/Meteora.svg"
import Adopet from "../../Assets/Adopet.svg"
import IndieBrew from "../../Assets/IndieBrew.svg"

export default function Projetos() {

    const imagensDosProjetos = [
        {
            titulo: "Meteora",
            descricao: "",
            tecnologias: "",
            img: Meteora,
            alt: "Imagem do projeto 'Meteora'",
        },
        {
            titulo: "Adopet",
            descricao: "A Adopet é uma inovadora empresa fictícia de adoção, que tem como objetivo conectar adotantes e animais que buscam um lar.",
            tecnologias: "HTML ·  JavaScript ·  Tailwind",
            img: Adopet,
            alt: "Imagem do projeto 'Adopet'",
        },
        {
            titulo: "IndieBrew Starter",
            descricao: "Uma Landing page que consiste em uma página de apresentação com um layout atraente e moderno.",
            tecnologias: "HTML ·  SASS",
            img: IndieBrew,
            alt: "Imagem do projeto 'IndieBrew'",
        }
    ]

    return (
        <Container>
            <h2>Meus principais <span>projetos</span></h2>

            <section>
                {imagensDosProjetos.map((projetos, k) => (
                    <div key={k}>
                        <img src={projetos.img} alt={projetos.alt} />
                    </div>
                ))}
            </section>

            <CircluloRoxo></CircluloRoxo>
            <CircluloAzul></CircluloAzul>
            <CircluloAzulSecundario></CircluloAzulSecundario>

        </Container>
    )
}