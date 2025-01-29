import React,{ useState,useEffect } from 'react';

//Components
import TableComponent from '../../../components/Table/TableComponent';
import { Button } from '@mui/material';

//Alertas 
// import Swal from 'sweetalert2';

// Redux
import { useSelector , useDispatch } from "react-redux";

//Actions
import { getItemAllService } from "../../../store/action/itemAction";

function ListTask() {

  const rows = useSelector((store) => store.item);
  const dispatch = useDispatch();

  const [view, setView] = useState({
      list:true,
      create:false,
      update:false
  });
    
  const columns = [
    // { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Descripcion',
      width: 150,
      editable: true,
    }
  ];

  //Aqui hago la consulta a la base de datos y la agrego el payload al redux
  useEffect(() => {
    dispatch(getItemAllService());
  }, [dispatch])

  const handleViewCreate = () => {
    setView({create:true});
  }

  const handleViewDelete = () => {}
  const handleViewUpdate = () => {}
  const showAlert = () => {}

  return (
    <>
      { 
        view.list === true ? 
          <>
            <Button onClick={handleViewCreate}>Guardar</Button>
            <TableComponent columns={columns} rows={rows} />
          </> : 
        view.create === true ? <></> : 
        view.update === true ? <></> : 
        <></>
      }
    </>
  )
}

export default ListTask