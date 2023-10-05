import React, {useState, useEffect} from "react";
import './App.css';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from './components/NavBar';
import AddBlog from "./pages/AddBlog";
import ViewBlogs from "./pages/ViewBlogs";

function App() {


return (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/addblog" element={<AddBlog/>}/>
      <Route path="/get-all-posts" element={<ViewBlogs/>}/>
    </Routes>
  </Router>
);
 }

export default App;
