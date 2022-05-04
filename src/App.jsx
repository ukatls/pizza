import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePizza from "./pages/create-pizza/CreatePizza";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaAC } from "./redux/actionCreators";
import { PrivateRoute } from "./pages/routes/PrivateRoute";
import { PublicRoute } from "./pages/routes/PublicRoute";



export default function App() {
  const pending = useSelector((state) => state.pizza.pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPizzaAC())
  }, [dispatch]);


  if (pending) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboute-us" element={<PublicRoute Component={About}/>} />
          <Route path="/admin" element={<PublicRoute Component={Admin}/> } />
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
          <Route path="/create-pizza" element={<PrivateRoute Component={CreatePizza} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
