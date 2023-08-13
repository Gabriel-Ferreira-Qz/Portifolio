import { FaTimes } from 'react-icons/fa'
import { BtnContato, Container } from './style'


export default function SideBar() {

    const links = [
        {
            nome: "Home",
            href: "#"
        },
        {
            nome: "Sobre mim",
            href: "#"
        },
        {
            nome: "Projetos",
            href: "#"
        },
        {
            nome: "Conhecimentos",
            href: "#"
        },
    ]

    return(
        <Container>
            {links.map((link, k) => ( 
                <li key={k}>
                    <a href={link.href}>{link.nome}</a>
                </li>
            ))}
            
            <BtnContato>
                <button>Contato</button>
            </BtnContato>
        </Container>
    )
}