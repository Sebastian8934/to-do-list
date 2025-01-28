import React from 'react';

//Material ui
import { Button,TextField,Box,Container } from '@mui/material';

function EditStatusItem({ setView }) {

    const returnView = () => {
      setView({list:true});
    }

  return (
    <>
      <Container maxWidth="sm">
        <Button onClick={returnView} variant="contained">Volver</Button>
          <Box sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
          }}>
            <TextField sx={{margin:"20px 0px 20px 0px"}} id="outlined-basic" label="Descripcion" variant="outlined" />
            <Button variant="contained">Guardar</Button>
          </Box>
      </Container>
    </>
  )
}

export default EditStatusItem