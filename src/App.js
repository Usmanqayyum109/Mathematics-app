
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Header from './Componets/Header';
import Test from './Componets/math';
import Detail from './Componets/Detail';



function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element = {<Test />}/>
        {/* <Route path='Layout' element = {<Layout />}/> */}
        <Route path='Detail' element = {<Detail />}/>
      </Routes>
    
      </BrowserRouter>
   
    
    </div>
  );
}

export default App;
