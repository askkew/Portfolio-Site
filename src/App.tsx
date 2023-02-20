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
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
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

  return (
    <div>
      <section>
        <div 
          id="stars" 
          style={{transform: `translateY(${offsetY * 0.2}px`}}
        />
        <div
          id="stars2"
          style={{transform: `translateY(${offsetY * 0.5}px`}}
        />
        <div
          id="stars3"
          style={{transform: `translateY(${offsetY * 0.7}px`}}
        />
        <div>{renderContent()}</div>
      </section>
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