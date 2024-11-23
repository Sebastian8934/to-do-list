import React,{ useContext } from 'react';

//Component
import NavbarHomeComponent from '../../components/Navbar/NavbarHomeComponent/NavbarHomeComponent';

//Views 
import ListTask from '../../pages/Task/List/ListTask';

//Context for views
import { ViewsContext } from '../../context/ViewsContext';

function Home() {

  //Manejo de las vistas
  const { views } = useContext(ViewsContext);

  return (
    <>
      <NavbarHomeComponent>

        { views.listTask === true ?
          <ListTask /> :
         <></>
        }

      </NavbarHomeComponent>
    </>
  )
}

export default Home