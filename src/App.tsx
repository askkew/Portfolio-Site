import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Header from './components/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
      {/* <NavHelper> */}
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      {/* </NavHelper> */}
    </div>
  );
}

export default App;
