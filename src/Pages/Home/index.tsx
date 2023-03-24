import React, { Suspense, useEffect } from "react";
import { styled } from "@mui/system";
import { Left, Right, NameTypograph, SubtitleTypograph, HomeDiv, StyledCanvas, RightRight } from "./HomeStyles";
import { StyledButton } from "../../utils/Button";
import ComputersCanvas from "../../components/canvas";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/Ball/Loader";

const Home = () => {

  return (
    <section id="home">
      <HomeDiv>
        <Left>
          <NameTypograph>Hi, I'm <span style={{color: '#e6f1ff'}}>Lucas Overbey</span></NameTypograph>
          <SubtitleTypograph>I'm a <span style={{color: '#e6f1ff'}}>Software Engineer</span></SubtitleTypograph>
        </Left>
        <Right>
          <StyledCanvas
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={0.25} />
              <directionalLight position={[0, 0, 0.05]} />
              <mesh>
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial
                  color='rgb(231,212,121)'
                  polygonOffset
                  polygonOffsetFactor={-5}
                  flatShading
                />
              </mesh>
            </Suspense>
          </StyledCanvas>
        </Right>
        {/* <RightRight /> */}
      </HomeDiv>
    </section>
  );
};

export default Home