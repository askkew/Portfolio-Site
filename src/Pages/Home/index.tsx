import { useState } from "react";
import { Left, NameTypograph, HomeDiv, ResumeStyledButton, ResumeStyledButtonIcon } from "./HomeStyles";
import Description from "../../components/Description";
import { IoDocumentTextOutline } from "react-icons/io5";
import Modal from "../../components/Modal";

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
      </HomeDiv>
      {/* @ts-ignore */}
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </section>
  );
};

export default Home