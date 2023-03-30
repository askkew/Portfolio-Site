import React, { Suspense, useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Left, Right, NameTypograph, SubtitleTypograph, HomeDiv, StyledCanvas, RightRight } from "./HomeStyles";
import { StyledButton } from "../../utils/Button";
import ComputersCanvas from "../../components/canvas";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/Ball/Loader";
import Description from "../../components/Description";
import { SendStyledButton, SendStyledButtonIcon } from "../Contact/ContactStyles";
import { IoDocumentTextOutline } from "react-icons/io5";
import Modal from "../../components/Modal";


//#8800c7
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <section id="home">
      <HomeDiv>
        <Left>
          {/* <NameTypograph>Hi, I'm <span style={{color: 'hsl(218, 89%, 79%)'}}>Lucas</span></NameTypograph> */}
          <NameTypograph>Hi, I'm <span style={{color: 'hsl(250, 89%, 79%)'}}>Lucas</span></NameTypograph>
          <Description />
          <SendStyledButton type="button" onClick={() => (modalOpen ? close() : open())} >Hire now!</SendStyledButton>
          <SendStyledButtonIcon type="button" onClick={() => (modalOpen ? close() : open())} ><IoDocumentTextOutline /></SendStyledButtonIcon>
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
      {/* @ts-ignore */}
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </section>
  );
};

export default Home