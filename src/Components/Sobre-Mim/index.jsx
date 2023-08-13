import { CircluloAzul, CircluloRoxo, Container } from './style'
import { AiFillFilePdf } from 'react-icons/ai'

import Retangulo from "../../Assets/Rectangle 5.svg"

export default function SobreMim() {
    return (
        <Container>
            <img src={Retangulo} alt="Foto do desenvolvedor 'Gabriel Ferreira'" />

            <section>
                <h2>Sobre mim</h2>
                <div>
                    <p>Me chamo Gabriel Ferreira de Queiroz, estudante de Engenharia Mecatrônica e desenvolvedor web Front-end. Possuo experiência na criação de páginas e sistemas web responsivos e atrativos.</p>
                    <p>Minha busca constante é pelo aprendizado na área de desenvolvimento, principalmente tecnologias JavaScript. Procuro oportunidades no mercado para crescer como desenvolvedor e, no futuro, almejo me tornar um desenvolvedor Full Stack.</p>
                </div>
            </section>

            <button>
                Baixar Currículo
                <AiFillFilePdf />
            </button>
            <CircluloRoxo></CircluloRoxo>
            <CircluloAzul></CircluloAzul>
        </Container>
    )
}

