import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { Left, Right, NameTypograph, SubtitleTypograph, HomeDiv, StyledCanvas, RightRight } from "./HomeStyles";
import { StyledButton } from "../../utils/Button";
import ComputersCanvas from "../../components/canvas";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const Home = () => {

  return (
    <section id="home">
      <HomeDiv>
        <Left>
          <NameTypograph>Hi, I'm <span style={{color: '#e6f1ff'}}>Lucas Overbey</span></NameTypograph>
          <SubtitleTypograph>I'm a <span style={{color: '#e6f1ff'}}>Software Engineer</span></SubtitleTypograph>
        </Left>
        <Right>
          <StyledCanvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <mesh>
              <dodecahedronGeometry args={[1, 0]}/>
              <meshStandardMaterial color="hsl(213, 89%, 79%)">
              </meshStandardMaterial>
            </mesh>
          </StyledCanvas>
        </Right>
        <RightRight />
      </HomeDiv>
    </section>
  );
};

export default Home