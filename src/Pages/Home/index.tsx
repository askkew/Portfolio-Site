import { useState } from "react";

import { Left, Right, NameTypograph, SubtitleTypograph, HomeDiv, StyledCanvas, RightRight, ResumeStyledButton, ResumeStyledButtonIcon } from "./HomeStyles";
import Description from "../../components/Description";
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
          <NameTypograph>Hi, I'm <span style={{color: 'hsl(195, 89%, 79%)'}}>Lucas</span></NameTypograph>
          <Description />
          <ResumeStyledButton type="button" onClick={() => (modalOpen ? close() : open())} >Resume</ResumeStyledButton>
          <ResumeStyledButtonIcon type="button" onClick={() => (modalOpen ? close() : open())} ><IoDocumentTextOutline /></ResumeStyledButtonIcon>
        </Left>
        {/* <Right>
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
        </Right> */}
      </HomeDiv>
      {/* @ts-ignore */}
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </section>
  );
};

export default Home