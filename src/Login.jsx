import React from 'react'

export const Login = () => {
  return (
    <section className='login'>
        <form action="">
            <label htmlFor="password">Ingrese la contraseña</label>
            <input id='password' type="password" placeholder='contraseña'/>
        </form>
    </section>
  )
}
