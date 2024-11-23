import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Vistas
import Index from '../pages/Index/Index';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound'; 

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRouter