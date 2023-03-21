import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { TitleDiv, NameTypograph, SubtitleTypograph } from "./HomeStyles";
import { StyledButton } from "../../utils/Button";
import ComputersCanvas from "../../components/canvas";


const Home = () => {

  return (
    <section id="home">
      <ComputersCanvas />
    </section>
  );
};

export default Home