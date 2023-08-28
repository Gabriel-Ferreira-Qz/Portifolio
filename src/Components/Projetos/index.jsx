import { CircluloAzul, CircluloAzulSecundario, CircluloRoxo, Container, Galeria } from "./style"

import GaleriaDeProjetos from "../GaleriaDeProjetos"

import Meteora from "../../Assets/Meteora.svg"
import Adopet from "../../Assets/Adopet.svg"
import IndieBrew from "../../Assets/IndieBrew.svg"
import Portfolio from "../../Assets/Portifilo.svg"

export default function Projetos() {

    const imagensDosProjetos = [
        {
            titulo: "Meteora",
            descricao: "Landing page de e-commerce fictício de uma loja de roupa chamada Meteora",
            tecnologias: "React, React-Bootstrap, Styled-Components",
            img: Meteora,
            alt: "Imagem do projeto 'Meteora'",
            repositorio: "https://github.com/Gabriel-Ferreira-Qz/Meteora",
            link: "https://meteora-wkx9.vercel.app/"
        },
        {
            titulo: "Adopet",
            descricao: "A Adopet é uma inovadora empresa fictícia de adoção, que tem como objetivo conectar adotantes e animais que buscam um lar.",
            tecnologias: "HTML, Tailwind, JavaScript",
            img: Adopet,
            alt: "Imagem do projeto 'Adopet'",
            repositorio: "https://github.com/Gabriel-Ferreira-Qz/Adopet",
            link: "https://adopet-o1b2.vercel.app/"
        },
        {
            titulo: "IndieBrew Starter",
            descricao: "Uma Landing page que consiste em uma página de apresentação com um layout atraente e moderno.",
            tecnologias: "HTML, SASS",
            img: IndieBrew,
            alt: "Imagem do projeto 'IndieBrew'",
            repositorio: "https://github.com/Gabriel-Ferreira-Qz/IndieBrew-Starter",
            link: "https://indie-brew-starter.vercel.app/"
        },
        {
            titulo: "Portfólio",
            descricao: "Meu primeiro portfólio, aqui você poderá encontrar informações de contato, meus principais projetos e informções sobre minha trajetória.",
            tecnologias: "React, Styled-Components",
            img: Portfolio,
            alt: "Imagem do projeto 'Portfolio'",
            repositorio: "https://github.com/Gabriel-Ferreira-Qz/Portifolio",
            link: "#"
        }
    ]

    return (
        <>
            <Container name="projetos">
                <h2>Meus principais <span>projetos</span></h2>

                <Galeria>
                    {imagensDosProjetos.map((projetos, k) => (
                        <li key={k}>
                            <GaleriaDeProjetos
                                titulo={projetos.titulo}
                                descricao={projetos.descricao}
                                tecnologias={projetos.tecnologias}
                                img={projetos.img}
                                alt={projetos.alt}
                                repositorio={projetos.repositorio}
                                link={projetos.link}
                            />
                        </li>
                    ))}
                </Galeria>

                <CircluloRoxo></CircluloRoxo>
                <CircluloAzul></CircluloAzul>
                <CircluloAzulSecundario></CircluloAzulSecundario>

            </Container>
        </>
    )
}