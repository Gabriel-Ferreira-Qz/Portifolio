import { useEffect, useState } from "react"
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

import { BtnContato, Cabecalho, Nav } from './style'

import SideBar from "../SideBar"

import Logo from '../../Assets/Logo-mobile.svg'

export default function Header() {

    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)


    //Muda a cor do background quando rolar a página
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        {
            nome: "Home",
            href: "home"
        },
        {
            nome: "Sobre mim",
            href: "sobre-mim"
        },
        {
            nome: "Projetos",
            href: "projetos"
        },
        {
            nome: "Conhecimentos",
            href: "linguagens"
        },
    ]

    return (
        <Cabecalho $isscrolled={isScrolled}>
            <img src={Logo} alt="Logo do portifólio" />

            <Nav>
                <ul>
                    {links.map((link, k) => (
                        <li key={k}>
                            <Link 
                                activeClass="active"
                                to={link.href}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {link.nome}
                            </Link>
                        </li>
                    ))}
                </ul>

                <BtnContato href="mailto:gabrielq9101@gmail.com">Contato</BtnContato>

            </Nav>

            <FaBars onClick={showSideBar} />
            {sideBar &&
                <SideBar
                    links={links}
                    showSideBar={showSideBar}
                />
            }
        </Cabecalho>
    )
}