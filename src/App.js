import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import Register from './components/Register'
import {Box} from '@mui/material'
import './App.css';
import Alert from './components/Alert'

function App() {
  return (
    <BrowserRouter>  
    <Box sx={{background:"#000"}}>  
         <Navbar/>    
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/signin' element={<SignIn/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/alarm' element={<Alert/>}/>
         </Routes>
    </Box>
    
 </BrowserRouter>
  );
}

export default App;
