import { AiFillFilePdf } from 'react-icons/ai'
import { CircluloAzul, CircluloRoxo, Container, BtnCurrriculo } from './style'

import FotoDoDensenvolvedor from "../../Assets/FotoDePerifl.svg"

export default function SobreMim() {

    return (
        <>
            <Container id="sobre-mim">
                <img src={FotoDoDensenvolvedor} alt="Foto do desenvolvedor 'Gabriel Ferreira'" />

                <section>
                    <h2>Sobre mim</h2>
                    <div>
                        <p>Me chamo Gabriel Ferreira de Queiroz, estudante de Engenharia Mecatrônica e desenvolvedor web Front-end. Possuo experiência na criação de páginas e sistemas web responsivos e atrativos.</p>
                        <p>Minha busca constante é pelo aprendizado na área de desenvolvimento, principalmente tecnologias JavaScript. Procuro oportunidades no mercado para crescer como desenvolvedor e, no futuro, almejo me tornar um desenvolvedor Full Stack.</p>
                    </div>

                    <BtnCurrriculo href="https://drive.google.com/file/d/1SB00uajTU7Ni4sgRuspCJs50LTGKzANm/view?usp=drivesdk">
                        Baixar Currículo
                        <AiFillFilePdf />
                    </BtnCurrriculo>
                </section>

                <CircluloRoxo></CircluloRoxo>
                <CircluloAzul></CircluloAzul>
            </Container>
        </>
    )
}

