import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './pages/main/Main';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { baseUrl, houseApi } from './constants';
import { useState, useEffect } from 'react';

export default function App() {
  const [ pizzaArray, setPizzaArray] = useState([]);
 
  useEffect(() => {
    fetch(baseUrl + houseApi)
      .then((resp) => resp.json())
      .then((data) => (setPizzaArray(data)));
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Navbar basket={pizzaArray}/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/aboute-us' element={<About/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
