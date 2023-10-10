import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link className='title' to='/'>
                <h1>
                    <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/changos.webp?alt=media&token=cd3cbc26-a875-455f-b68e-afc495aa559d&_gl=1*1vq4dz3*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwMDM4OC4yLjEuMTY5NjkwMTkxOS40MS4wLjA." title="Logo Padre Domingo" alt="Logo Padre Domingo" />
                    Padre Domingo
                </h1>
            </Link>
            <nav className='links'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/lineamentos'>Lineamentos</Link>
                <Link className='link' to='/horario'>Horario</Link>
                <Link className='link' to='/juegos'>Juegos</Link>
            </nav>
        </header>
    )
}
