import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter, Routes, Route } from 'react-router-dom' 
import  Homepage from "./pages/homepage";
import About  from "./pages/about";
import Login  from "./pages/login";
import Dashboard  from "./pages/dashboard";
import Signup  from "./pages/signup"; 
import Createaccount  from "./pages/createaccount"; 
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
     <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='login' element = {<Login/>}/>
    <Route path='signup' element = {<Signup/>}/>
    <Route path='dashboard' element = {<Dashboard/>}/>
    <Route path='createaccount' element = {<Createaccount/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
