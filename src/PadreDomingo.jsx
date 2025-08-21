import React, { useState } from 'react'
import { Header } from './Header'
import { Login } from './Login'
import { Inicio } from './Inicio'
import { Lineamentos } from './Lineamentos'
import { Horario } from './Horario'
import { PPT } from './PPT'
import { Juegos } from './Juegos'
import { Routes, Route } from 'react-router-dom'

export const PadreDomingo = () => {

const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'mapachekchudo') {
      setIsAuthenticated(true);
    } else {
      alert('mongol');
    }
  };

  return (
    <section className='login'>
      {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit}>
          <label htmlFor="password">Ingresa contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='contraseña'
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button type="submit">Submit</button> */}
        </form>
      ) : (
        <>
      <Header />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/lineamentos' element={<Lineamentos />}/>
          <Route path='/reglamento' element={<Lineamentos />}/>
          <Route path='/decalogo' element={<Lineamentos />}/>
          <Route path='/reglas' element={<Lineamentos />}/>
          <Route path='/constitucion' element={<Lineamentos />}/>
          <Route path='/horario' element={<Horario />}/>
          <Route path='/ppt' element={<PPT />}/>
          <Route path='/juegos' element={<Juegos />}/>
        </Routes>
      </>
      )}
    </section>
  );
}

