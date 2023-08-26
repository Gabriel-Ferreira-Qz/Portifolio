import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import { Botoes, Container, Descricao } from './style'

export default function Home() {
    return (
        <>
            <Container name="home">
                <Descricao>
                    <h3>Olá, meu nome é </h3>
                    <h1>Gabriel Ferreira</h1>
                    <h2>Desenvolvedor <span>Front-end</span></h2>
                    <p>Crio <span>páginas web inovadoras</span>, unindo arte e tecnologia para tornar a experiência online inclusiva e interativa.</p>

                    <Botoes>
                        <li>
                            <a href="https://www.linkedin.com/in/gabriel-queiroz-7a1428212/">LinkedIn<AiFillLinkedin /></a>
                        </li>
                        <li>
                            <a href="https://github.com/Gabriel-Ferreira-Qz">GitHub<AiFillGithub /></a>
                        </li>
                    </Botoes>

                </Descricao>

            </Container>
        </>
    )
}