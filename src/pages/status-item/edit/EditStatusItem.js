import React,{ useState,useEffect } from 'react';

//Material ui
import { Button,TextField,Box,Container } from '@mui/material';

//Alertas 
import Swal from 'sweetalert2';

//Actions
import { editStatusItemService } from "../../../store/action/statusItemAction";

function EditStatusItem({ setView,infoUpdate }) {

    const [inputDescription, setInputDescription] = useState("");
    const [errorDescription, setErrorDescription] = useState('');

    useEffect(() => {
      setInputDescription(infoUpdate.description);
    }, [])    

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

    const edit = async () => {
      //Crea el cuerpo de la peticion
      const body = {
        id:infoUpdate._id,
        description:inputDescription
      };
      //Valida que el input cumpla todo
      let responseValidate = validateForm();
      if (responseValidate) {
          //Realiza la peticion y devuelve su respuesta
          let responseData = await editStatusItemService(body);
          switch (responseData.statusCode) {
            case 200:
              showAlert(
                "Se edito con exito",
                `<p class="alert-success"> Se edito con exito. </p>`
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
            {errorDescription && <p style={{ color: 'red' }}>{errorDescription}</p>}
            <Button onClick={edit} variant="contained">Guardar</Button>
          </Box>
      </Container>
    </>
  )
}

export default EditStatusItem