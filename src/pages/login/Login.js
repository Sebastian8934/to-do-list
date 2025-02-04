import React,{ useState } from 'react';

//Componentes
import NavbarIndexComponent from '../../components/Navbar/NavbarIndexComponent/NavbarIndexComponent';

//Material ui
import { Box,Card,CardContent,TextField,Button } from '@mui/material';

//Navegacion
import { useNavigate } from 'react-router-dom';

//Action
import { login } from '../../store/action/loginAction';

// Redux
import { useDispatch } from "react-redux";

function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    let body = {
      user:userName,
      password:password
    }
    let response = await dispatch(login(body));
    // console.log(response);
    switch (response.statusCode) {
      case 200:  
        navigate('/home');
        break;    
      default:
        console.log("usuario o contraseña incorrecta");        
        break;
    }
  }

  return (
    <>
      <NavbarIndexComponent text={"Inicio"} url={"index"} />
      
      <Box sx={{width:"100%",height:"80vh"}}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  width={"100%"} height={"100%"} >
          <Card sx={{ maxWidth:"100%", minWidth:400, padding:3 }}>
            <CardContent>              
              <Box>
                <TextField value={userName} onChange={(e) => setUserName(e.target.value)} label="Usuario" variant="outlined" fullWidth />
                {errorUser && <p style={{ color: 'red' }}>{errorUser}</p>}
              </Box>
              <Box my={2}>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} type='password' label="Contraseña" variant="outlined" fullWidth />
                {errorPassword && <p style={{ color: 'red' }}>{errorPassword}</p>}
              </Box>
              <Box>
                <Button onClick={handleSubmit} variant="contained">Ingresar</Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  )
}

export default Login