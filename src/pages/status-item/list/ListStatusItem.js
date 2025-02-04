import React,{ useState,useEffect } from 'react';

//View
import Create from '../create/CreateStatusItem';
import Edit from '../edit/EditStatusItem';

//Components
import TableComponent from '../../../components/Table/TableComponent';

//Material ui
import { Button,Box } from '@mui/material';

//Alertas 
import Swal from 'sweetalert2';

// Redux
import { useSelector,useDispatch } from "react-redux";

//Actions
import { getStatusItemAllService,deleteStatusItemService } from "../../../store/action/statusItemAction";

function ListStatusItem() {

  const [infoUpdate, setInfoUpdate] = useState({});
  let rows = useSelector((state) => state.statusItem);
  const dispatch = useDispatch();

  const [view, setView] = useState({
    list:true,
    create:false,
    update:false
  });

  const columns = [
    // { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'description',
      headerName: 'Descripcion',
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => (
        <div>
          {/* Botón de Editar */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 10 }}
            onClick={() => handleEdit(params.row)}
          >
            Editar
          </Button>
          {/* Botón de Eliminar */}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row._id)}
          >
            Eliminar
          </Button>
        </div>
      ),
    },
  ];

  //Aqui monitoreo las consultas
  useEffect(() => {
    handleGet();
  }, [dispatch,view])

  //Aqui hace la peticion a la base de datos
  const handleGet = () => {
    dispatch(getStatusItemAllService());
  } 

  const handleCreate = () => {
    setView({create:true});
  }

  const handleDelete = async (id) => {
    let responseData = await deleteStatusItemService(id);
    //console.log(responseData);
    switch (responseData.statusCode) {
      case 200:
        handleGet();
        showAlert(
          "Se elimino con exito",
          `<p class="alert-success"> Se elimino con exito. </p>`
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

  const handleEdit = (infoEdit) => {
    setInfoUpdate(infoEdit);
    setView({update:true});
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
      { 
        view.list === true ?
          <>
            <Button variant="contained" onClick={handleCreate}>Crear</Button>
            <Box mt={2}>
              <TableComponent columns={columns} rows={rows} />
            </Box>
          </> : 
        view.create === true ? <Create setView={setView} /> :
        view.update === true ? <Edit setView={setView} infoUpdate={infoUpdate} /> :
        <></>
      }
    </>
  )
}

export default ListStatusItem