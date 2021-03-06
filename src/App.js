import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Work from './components/Work';
import Footer from './components/Footer';
import Resume from './components/Resume';
import {
  BrowserRouter as Router,
  Routes,
  Route
}  from "react-router-dom";



function App() {


  const [categories] = useState([
    {
      name: 'projects',
      description: '',
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
        <Route exact path='/resume' element={<Resume/>}>
        </Route>
        <Route exact path='/contact' element={<ContactForm/>}>
        </Route>   

        <Route path="*" element={<Home/>} />

     </Routes>  
     <Footer />   
    </Router>
  );
}

export default App;