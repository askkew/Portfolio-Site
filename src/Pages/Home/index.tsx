import React from "react";
import { styled } from "@mui/system";
import { TitleDiv, NameTypograph, SubtitleTypograph } from "./HomeStyles";
import { StyledButton } from "../../utils/Button";

const Home = () => {
  return (
    <section id="home">
      <TitleDiv>
        <NameTypograph variant="h1">LUCAS OVERBEY</NameTypograph>
        <SubtitleTypograph variant="h2">Software Developer, Full Stack</SubtitleTypograph>
      </TitleDiv>
    </section> 
  );
};

export default Home