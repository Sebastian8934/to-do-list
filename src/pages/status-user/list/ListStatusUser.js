import React, { useState, useEffect } from 'react';

//View
import Create from '../create/CreateStatusUser';
import Edit from '../edit/EditStatusUser';

//Components
import TableComponent from '../../../components/Table/TableComponent';
import { Button, Box } from '@mui/material';

//Alertas
import Swal from 'sweetalert2';

// Redux
import { useSelector, useDispatch } from "react-redux";

//Actions
import { getStatusUserAllService, deleteStatusUserService } from "../../../store/action/statusUserAction";

const ListStatusUser = () => {
  const [ infoUpdate, setInfoUpdate ] = useState({});
  const rows = useSelector((store) => store.statusUser);
  const dispatch = useDispatch();

  const [ view, setView ] = useState({
      list: true,
      create: false,
      update: false
  });

  useEffect(() => {
      handleGet();
  }, [dispatch, view]);

  const columns = [{
      field: 'name',
      headerName: 'Descripcion',
      width: 150,
      editable: true,
    }, {
      field: "actions",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => (
        <div>
          {/* Botón de Editar */}
          <Button variant="contained" color="primary" size="small" style = { { marginRight: 10 } } onClick = { () => handleEdit(params.row) }>Editar</Button>
          
          {/* Botón de Eliminar */}
          <Button variant="contained" color="secondary" size="small" onClick = { () => handleDelete(params.row._id) } > Eliminar </Button>
        </div>
      ),
    }
  ];

  const handleGet = () => {
    dispatch(getStatusUserAllService());
  }

  const handleCreate = () => {
    setView({ create: true });
  }

  const handleEdit = (infoEdit) => {
    setInfoUpdate(infoEdit);
    setView({ update: true });
  }

  const handleDelete = async (id) => {
        const responseData = await deleteStatusUserService(id);
  
        if (responseData.statusCode === 200) {
          handleGet();
          showAlert("Se elimino con exito", `<p class="alert-success"> Se elimino con exito. </p>`);
        } else {
          showAlert("A ocurrido un error", `<p class="alert-failed"> A ocurrido un error. </p>`);
        }
  }

  const showAlert = (type, message) => {
    Swal.fire({
        title: "Resultado",
        html:`<p class="livness-alert-text font-poppins"> ${ type } </p>
          ${ message }`,
        confirmButtonText:"Finalizar",
        customClass:{
            popup:`livness-modal font-poppins`,
            confirmButton:"livness-button",
        },

        allowOutsideClick:false
    });
  }

  return (
    <>
      { view.list === true && (
        <>
          <Button variant="contained" onClick={ handleCreate }>Crear</Button>
          <Box mt={ 2 }>
            <TableComponent columns={ columns } rows={ rows } />
          </Box>
        </>
      )}
      { view.create === true && <Create setView={ setView } /> }
      { view.update === true && <Edit setView={ setView } infoUpdate={ infoUpdate } /> }
    </>
  )
}

export default ListStatusUser;
