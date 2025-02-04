import React, { useState } from 'react';

//Material ui
import { Button, TextField, Box, Container } from '@mui/material';

//Action
import { createStatusTaskService } from '../../../store/action/statusTaskAction';

//Alertas 
import Swal from 'sweetalert2';

function CreateStatusTask({ setView }) {
  const [ inputDescription, setInputDescription ] = useState('');
  const [ errorDescription, setErrorDescription ] = useState('');

  const returnView = () => {
    setView({ list: true });
  }

  const create = async () => {
    const body = {
      description: inputDescription
    }
    
    const responseData = await createStatusTaskService(body);

    if (validateForm()) {
      if (responseData.statusCode === 201) {
        cleanForm();

        showAlert(
          "Se creo con exito",
          `<p class="alert-success"> Se creo con exito. </p>`
        );
      } else {
        showAlert(
          "A ocurrido un error",
          `<p class="alert-failed"> A ocurrido un error. </p>`
        );
      }
    }
  }

  const validateForm = () => {
    let isValid = true;

    const descriptionError = validateField(inputDescription, 'descripcion', /^.+$/, 4);
    
    if (descriptionError) {
      setErrorDescription(descriptionError);
      isValid = false;
    } else {
      setErrorDescription("");
    }

    return isValid;
  }

  const validateField = (value, fieldName, regex, minLength, customErrorMessage) => {
    if (value.trim() === '') {
      return `El campo ${ fieldName } no puede estar en blanco.`;
    }

    if (regex && !regex.test(value)) {
      return customErrorMessage || `El campo ${ fieldName } no cumple con el formato esperado.`;
    }

    if (value.length < minLength) {
      return `El campo ${ fieldName } debe tener al menos ${ minLength } caracteres.`;
    }

    return null;
  };  

  const showAlert = (type, message) => {
    Swal.fire({
      title: "Resultado",
      html: `<p class="livness-alert-text font-poppins"> ${ type } </p> ${ message }`,
      confirmButtonText: "Finalizar",
      customClass: {
        popup: `livness-modal font-poppins`,
        confirmButton: "livness-button",
      },
      allowOutsideClick: false
    })
  }

  const cleanForm = () => {
    setInputDescription('');
    setErrorDescription('');
  }

  return (
    <Container maxWidth="sm">
      <Button onClick={ returnView } variant="contained">Volver</Button>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}>
          <TextField value={ inputDescription } onChange={(e) => setInputDescription(e.target.value)} sx={{ margin:"20px 0px 20px 0px" }} label="Descripcion" variant="outlined" />
          {errorDescription && <p style={{ color: 'red' }}>{ errorDescription }</p>}
          <Button onClick={ create } variant="contained">Guardar</Button>
        </Box>
    </Container>
  )
}

export default CreateStatusTask;