import { useState } from 'react'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
   
    <BrowserRouter>
    <h1>
    <Link to={'/'} >Akash   </Link> 
    | 
   <Link to={'/neet/online-coaching-class-11'} > Class-11 </Link> 
    | 
    <Link to={'/neet/online-coaching-class-12'}>Class-12</Link> 
   </h1>
    <Routes>
       <Route path='/neet/online-coaching-class-11' element={<Class11Program/>} ></Route>
       <Route path='/neet/online-coaching-class-12' element={<Class12Program/>} ></Route>
       <Route path='/' element={<Landing/>} ></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

function Landing(){
  return <div>
    <h1>Welcome to Akash couching center</h1>
  </div>
}


function Class11Program(){
  return <div>
    <h1>
 Welcome to class 11th Programm
    </h1>
   
  </div>
}

function Class12Program(){
  return <div>
    <h1>
      Welcome to class 12th Programm
    </h1>
    
  </div>
}

export default App
