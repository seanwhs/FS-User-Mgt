import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addUser" element={<AddUser />}/>
          <Route exact path="/editUser/:id" element={<EditUser />}/>
        </Routes>
    </Router>
    </>
  )
}

export default App