import React, { useEffect, useRef } from 'react';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Footer from './Pages/Footer';
import ScrollButton from './components/scrolltop';
import { styled } from '@mui/system';

const Container = styled('div')({
  // background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
  background: 'rgb(29,29,32)'
});

function App() {

  return (
    <Container>
      <Header/>
      <Home />
      <About/>
      <Work/>
      <Contact/>
      <ScrollButton/>
      <Footer/>
    </Container>
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