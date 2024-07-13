import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    const location = useLocation();

    const [hamburgerVisibility, setHamburgerVisibility] = useState('invisible')
    const [hamburgerIcon, setHamburgerIcon] = useState(faBars)
    const handleHamburgerIcon = () => {
        if (hamburgerIcon === faBars) {
            setHamburgerIcon(faXmark)
            setHamburgerVisibility('visible')
        } else {
            setHamburgerIcon(faBars)
            setHamburgerVisibility('invisible')
        }
    }

    const handleLinkClick = () => {
        setHamburgerIcon(faBars)
        setHamburgerVisibility('invisible')
    }

    return (
        <header>
            <Link className='title' to='/'>
                <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/changos.webp?alt=media&token=cd3cbc26-a875-455f-b68e-afc495aa559d&_gl=1*1vq4dz3*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwMDM4OC4yLjEuMTY5NjkwMTkxOS40MS4wLjA." title="Logo Padre Domingo" alt="Logo Padre Domingo" />
                <h1>Padre Domingo</h1>
            </Link>
            <nav className={`links ${hamburgerVisibility}`}>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/' ? 'active-link' : ''}`} to='/'>Inicio</Link>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/lineamentos' ? 'active-link' : ''}`} to='/lineamentos'>Lineamentos</Link>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/horario' ? 'active-link' : ''}`} to='/horario'>Horario</Link>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/ppt' ? 'active-link' : ''}`} to='/ppt'>PPT</Link>
                <Link onClick={handleLinkClick} className={`link ${location.pathname === '/juegos' ? 'active-link' : ''}`} to='/juegos'>Juegos</Link>
            </nav>
            <div className="hamburger-menu" onClick={handleHamburgerIcon}>
                <FontAwesomeIcon icon={hamburgerIcon} />
            </div>
        </header>
    )
}
