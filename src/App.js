import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Work from './components/Work';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
}  from "react-router-dom";



function App() {


  const [categories] = useState([
    {
      name: 'projects',
      description: 'Applications made with JS',
    }
  ]);

  const [currentCategory] = useState(categories[0]);


  return (
    <Router>
     <Nav />
      <Routes>
      <Route exact path='/' element={<Home/>}>
        </Route>
        <Route exact path='/work' element={<Work currentCategory={currentCategory}></Work>}>
        </Route>
        <Route exact path='/about' element={<About/>}>
        </Route>
        <Route exact path='/contact' element={<ContactForm/>}>
        </Route>    
     </Routes>  
     <Footer />   
    </Router>
  );
}

export default App;