import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className='home'>
      <header>
        <h1>Padre Domingo</h1>
        <nav className='links'>
          <Link className='route' to='/lineamentos'>Lineamentos</Link>
          <Link className='route' to='/horario'>Horario</Link>
          <Link className='route' to='/juegos'>Juegos</Link>
        </nav>
      </header>
      <p>Página en construcción</p>
    </section>
  )
}
