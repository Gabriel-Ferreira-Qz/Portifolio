import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from "react"

import { Cabecalho } from './style'
import SideBar from "../SideBar"

import Logo from '../../Assets/Logo-mobile.svg'


export default function Header() {

    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    
    const [isScrolled, setIsScrolled] = useState('false');

    const handleScroll = () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Cabecalho $isscrolled={isScrolled}>
            <img src={Logo} alt="Logo do portifólio" />

            <FaBars onClick={showSideBar} />
            {sideBar && <SideBar setSideBar={setSideBar} />}
        </Cabecalho>
    )
}