import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import { Container, Descricao } from './style'

export default function GaleriaDeProjetos({ titulo, descricao, tecnologias, img, alt, repositorio, link }) {
    return (
        <>
            <Container>
                <div>
                    <img src={img} alt={alt} />
                    <Descricao>
                        <h4>{titulo}</h4>
                        <h5>{tecnologias}</h5>
                        <p>{descricao}</p>
                        <div>
                            <a href={link}><BsLink45Deg /></a>
                            <a href={repositorio}><BsGithub /></a>
                        </div>
                    </Descricao>
                </div>
            </Container>
        </>
    )
}