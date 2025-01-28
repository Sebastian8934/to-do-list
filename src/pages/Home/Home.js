import React,{ useContext } from 'react';

//Component
import NavbarHomeComponent from '../../components/Navbar/NavbarHomeComponent/NavbarHomeComponent';

//Views 
import StatusTask from '../status-task/list/ListTask';
import StatusItem from '../status-item/list/ListStatusItem';
import Task from '../task/list/ListTask';
import Item from '../item/list/ListTask';

//Context for views
import { ViewsContext } from '../../context/ViewsContext';

function Home() {

  //Manejo de las vistas
  const { views } = useContext(ViewsContext);

  return (
    <>
      <NavbarHomeComponent>
        { 
          views.statusTask === true ?
            <StatusTask /> :
          views.statusItem === true ?
            <StatusItem /> :
          views.task === true ?
            <Task /> :
          views.item === true ?
            <Item /> :
            <></>
        }
      </NavbarHomeComponent>
    </>
  )
}

export default Home