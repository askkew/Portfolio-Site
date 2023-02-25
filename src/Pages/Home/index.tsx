import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { TitleDiv, NameTypograph, SubtitleTypograph } from "./HomeStyles";
import { StyledButton } from "../../utils/Button";

const Home = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderHomeContent = () => (
    <section id="home" style={{  background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <TitleDiv>
        <NameTypograph variant="h1">LUCAS ASKEW OVERBEY</NameTypograph>
        <SubtitleTypograph variant="h2">Software Developer, Full Stack</SubtitleTypograph>
      </TitleDiv>
    </section>
  );

  return (
    <div>
      {/* <div 
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
      /> */}
      <div>{renderHomeContent()}</div>
    </div>
  );
};

export default Home