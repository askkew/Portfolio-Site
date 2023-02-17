import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import ScrollButton from './components/scrolltop';
import $ from 'jquery';

function App() {

  // let heightCalculation = window.innerHeight * 4.05;

  // useEffect(() => {
  //   $(document).ready(function() {
  //     $(window).scroll(function(e) {
  //       // @ts-ignore
  //       if ($(window).scrollTop() >= heightCalculation) {
  //         $(window).scrollTop(heightCalculation);
  //       }
  //     });
  //   });
  // }, []);

  return (
    <div>
      <div style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
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
