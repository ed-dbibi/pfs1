import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom' 

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import Login from './../pages/Login';
import Register from './../pages/Register';
import TourDetails from './../pages/TourDetails';
import SearcheResultList from './../pages/SearchResultList';



const Routers = () => {
    return (
        <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/tours/search' element={<SearcheResultList/>}/>


        </Routes>
    )

}
export default Routers;