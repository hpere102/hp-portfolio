import React, { useState } from 'react';
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

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


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
    </Router>
  );
}

export default App;