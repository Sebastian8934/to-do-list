import React,{ useContext } from 'react'

//Components
import TableComponent from '../../../components/Table/TableComponent';
import { Button } from '@mui/material';

//Context for views
import { ViewsContext } from '../../../context/ViewsContext';

function ListTask() {

    const { views,setViews } = useContext(ViewsContext);

    const handleClick = () => {
      setViews(views);
    }

  return (
    <>
      <Button onClick={handleClick}>Guardar</Button>
      <TableComponent />
    </>
  )
}

export default ListTask