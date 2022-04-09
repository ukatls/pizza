import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './pages/main/Main';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard';
import CreatePizza from './pages/create-pizza/CreatePizza';

export default function App() {
  const [ basket, setBasket] = useState([]);

  const addToBasket = (pizza) => {
    setBasket([...basket,pizza])
  }
 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('basket'))
    setBasket(data)
  }, []) 

  
  useEffect(() => {
    localStorage.setItem('basket',JSON.stringify(basket))
  }, [basket])


  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Navbar basket={basket}/>
          <Routes>
            <Route path='/' element={<Main addToBasket={addToBasket} />} />
            <Route path='/aboute-us' element={<About/>} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/create-pizza' element={<CreatePizza/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
