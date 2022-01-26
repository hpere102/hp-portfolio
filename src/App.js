import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Work from './components/Work';
import {
  BrowserRouter as Router,
  Routes,
  Route
}  from "react-router-dom";


function App() {


  return (
    <Router>
     <Nav />
      <Routes>
      <Route exact path='/' element={<Home/>}>
        </Route>
        <Route exact path='/work' element={<Work/>}>
        </Route>
        <Route exact path='/about' element={<About/>}>
        </Route>
        <Route exact path='/contact' element={<ContactForm/>}>
        </Route>    
     </Routes>     
    </Router>
  );
}

export default App;