import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import layer6 from './assets/layer-06.png';
import ScrollButton from './components/scrolltop';
import $ from 'jquery';
import {ParallaxProvider} from 'react-scroll-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Stars from './components/Stars';

function App() {

  return (
    <div>
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

{/* <Header/>
<Home/>
<About/>
<Experience/>
<Projects/>
<Contact/>
<ScrollButton/>
<Footer/> */}


  
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