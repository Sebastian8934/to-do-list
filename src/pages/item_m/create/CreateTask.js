import React,{ useContext, useEffect } from 'react';

//Context for views
import { useViewsContext } from '../../../context/ViewsContext';

function CreateTask() {

    const { views } = useContext(useViewsContext);

    useEffect(() => {
      console.log(views);
    }, [views])

  return (
    <>
    
    </>
  )
}

export default CreateTask