import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Header from './components/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import ScrollButton from './components/scrolltop';
import $ from 'jquery';

function App() {
  useEffect(() => {
    $(document).ready(function() {
      $(window).scroll(function(e) {
        // @ts-ignore
        if ($(window).scrollTop() >= 3900) {
          $(window).scrollTop(3900);
        }
      });
    });
  }, []);

  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <ScrollButton/>
      <Footer/>
    </div>
  );
}

export default App;
