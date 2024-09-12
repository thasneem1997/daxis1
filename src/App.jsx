import React from 'react'
import '../src/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
// import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newdashboard from './components/Newdashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='Register' element={<Register/>}></Route>
      <Route path='Dashboard' element={<Newdashboard/>}></Route>


    </Routes>
    </BrowserRouter>
   
  )
}

export default App
