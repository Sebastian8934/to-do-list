import React from 'react'

import { Button } from "flowbite-react";

function ButtonComponent({ onClick, className}) {
  return (
    <>
      <Button className={`${className}`} onClick={onClick}>Guardar</Button>
    </>
  )
}

export default ButtonComponent