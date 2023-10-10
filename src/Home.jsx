import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className='home'>
      <header>
        <h1>Padre Domingo</h1>
        <nav className='links'>
          <Link className='link' to='/lineamentos'>Lineamentos</Link>
          <Link className='link' to='/horario'>Horario</Link>
          <Link className='link' to='/juegos'>Juegos</Link>
        </nav>
      </header>
      <div className="about">
        <p>Página en construcción</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/snorlax.gif?alt=media&token=bbf5cee0-e796-4777-bc00-0b2cd99023aa&_gl=1*1pconwr*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwMDM4OC4yLjEuMTY5NjkwMDQ0Ny4xLjAuMA.." title='Sleeping Snorlax GIF' alt="Sleeping Snorlax GIF" />
      </div>
    </section>
  )
}
