import React from 'react'

//Componentes
import NavbarIndexComponent from '../../components/Navbar/NavbarIndexComponent/NavbarIndexComponent';

//Material ui
import { Box } from '@mui/material'

function Index() {

  return (
    <>
      <NavbarIndexComponent text={"Iniciar sesión"} url={"login"} />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h1>Esto es una aplicacion para tareas</h1>
        <h1>Por el momento para registrarse debe contactarme</h1>
        <h3>Telefono: 3147961800</h3>
      </Box>
      {/* <p>1. Saludo de bienvenida o algo por estilo</p>
      <p>2. Explicacion del proyecto y lo que puede hacer</p>
      <p>3. Invitarlo a iniciar session y probar el proyecto</p>
      <p>4. Informacion de contacto</p>
      <p>5. Invitarlo a contactarme</p>
      <p>6. Informacion de para contactarme</p> */}
    </>
  )
}

export default Index