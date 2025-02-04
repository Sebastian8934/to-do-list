import React, { useState, useEffect } from 'react';

//View
import Create from '../create/CreateStatusTask';
import Edit from '../edit/EditStatusTask';

//Components
import TableComponent from '../../../components/Table/TableComponent';
import { Button, Box } from '@mui/material';

//Alertas
import Swal from 'sweetalert2';

// Redux
import { useSelector, useDispatch } from "react-redux";

//Actions
import { getStatusTaskAllService, deleteStatusTaskService } from "../../../store/action/statusTaskAction";

function ListTask() {
  const [ infoUpdate, setInfoUpdate ] = useState({});
  const rows = useSelector((store) => store.statusTask);
  const dispatch = useDispatch();

  const [ view, setView ] = useState({
    list: true,
    create: false,
    update: false
  });

  const columns = [{
    field: 'description',
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
  },
  ];

  useEffect(() => {
    handleGet();
  }, [dispatch, view])

  const handleGet = () => {
    dispatch(getStatusTaskAllService());
  } 

  const handleCreate = () => {
    setView({ create: true });
  }

  const handleEdit = (infoEdit) => {
    setInfoUpdate(infoEdit);
    setView({ update: true });
  }

  const handleDelete = async (id) => {
      const responseData = await deleteStatusTaskService(id);

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

export default ListTask;