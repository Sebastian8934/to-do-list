import React,{ useState } from 'react';

//Material ui
import { Button,TextField,Box,Container } from '@mui/material';

//Action
import { createStatusItemService } from '../../../store/action/statusItemAction';

//Alertas 
import Swal from 'sweetalert2';

function CreateStatusItem({ setView }) {

    const [inputDescription, setInputDescription] = useState("");
    const [errorDescription, setErrorDescription] = useState('');
 
    const returnView = () => {
      setView({list:true});
    }

    const validateField = (value, fieldName, regex, minLength, customErrorMessage) => {
      if (value.trim() === '') {
        return `El campo ${fieldName} no puede estar en blanco.`;
      }
  
      if (regex && !regex.test(value)) {
        return customErrorMessage || `El campo ${fieldName} no cumple con el formato esperado.`;
      }
  
      if (value.length < minLength) {
        return `El campo ${fieldName} debe tener al menos ${minLength} caracteres.`;
      }
  
      return null; // Indica que la validación fue exitosa
    };

    const validateForm = () => {
      let isValid = true;

      const descriptionError = validateField(inputDescription, 'descripcion', /^.+$/, 4);
      if (descriptionError) {
        setErrorDescription(descriptionError);
        isValid = false;
      } else {
        setErrorDescription("");
      }

      // Puedes agregar más bloques de validaciones para otros campos si es necesario
      return isValid;
    }

    const cleanForm = () => {
      setInputDescription("");
      setErrorDescription("");
    }

    const create = async () => {
      //Crea el curpo de la peticion
      const body = {
        description:inputDescription
      };
      //Valida que el input cumpla todo
     let responseValidate = validateForm();

     if (responseValidate) {
       //Realiza la peticion y devuelve su respuesta
       let responseData = await createStatusItemService(body);
       switch (responseData.statusCode) {
         case 201:
           cleanForm();
           showAlert(
             "Se creo con exito",
             `<p class="alert-success"> Se creo con exito. </p>`
           );
           break;
         default:
           showAlert(
             "A ocurrido un error",
             `<p class="alert-failed"> A ocurrido un error. </p>`
           );
           break;
       }      
     }
    }

    const showAlert = (typeMessage,result) => {
        Swal.fire({
            title: "Resultado",
            html:`<p class="livness-alert-text font-poppins"> ${typeMessage} </p>
             ${result}`,
            confirmButtonText:"Finalizar",
            customClass:{
                popup:`livness-modal font-poppins`,
                confirmButton:"livness-button",
            },
            allowOutsideClick:false
        })
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
            <TextField value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} sx={{margin:"20px 0px 20px 0px"}} label="Descripcion" variant="outlined" />

            <Box>
              {errorDescription && <p style={{ color: 'red' }}>{errorDescription}</p>}
            </Box>

            <Button onClick={create} variant="contained">Guardar</Button>
          </Box>
      </Container>
    </>
  )
}

export default CreateStatusItem