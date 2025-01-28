import React,{ useState,useEffect } from 'react';

//Components
import TableComponent from '../../../components/Table/TableComponent';
import { Button } from '@mui/material';

//Alertas 
// import Swal from 'sweetalert2';

// Redux
import { useSelector , useDispatch } from "react-redux";

//Actions
import { getStatusTaskAllService } from "../../../store/action/statusTaskAction";

function ListTask() {

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
    }
  ];
  
  const rows = useSelector((store) => store.statusTask);
  const dispatch = useDispatch();

  //Aqui hago la consulta a la base de datos y la agrego el payload al redux
  useEffect(() => {
    dispatch(getStatusTaskAllService());
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