import { Link } from 'react-scroll'
import { BtnContato, Container } from './style'

export default function SideBar({ links, showSideBar }) {
    return (
        <>
            <Container>
                {links.map((link, k) => (
                    <li key={k}>
                        <Link
                            activeClass="active"
                            to={link.href}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={showSideBar}
                        >
                            {link.nome}
                        </Link>
                    </li>
                ))}

                <BtnContato href="mailto:gabrielq9101@gmail.com">Contato</BtnContato>
            </Container>
        </>
    )
}