import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AboutMe from './Pages/AboutMe';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import ContactMe from './Pages/ContactMe';
import Projects from './Pages/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "AboutMe" element={<AboutMe/>}/>
        <Route path = "Qualifications" element={<Qualifications/>}/>
        <Route path = "Skills" element={<Skills/>}/>
        <Route path = "ContactMe" element={<ContactMe/>}/>
        <Route path = "Projects" element={<Projects/>}/>

       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
