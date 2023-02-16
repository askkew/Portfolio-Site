import react from "react";
import { styled } from "@mui/system";
import { ButtonCircle, StyledIcon } from "./scrolltopstyles";
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () => {

  const handleClickNav = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ButtonCircle>
      <IconButton aria-label="scroll to top" onClick={handleClickNav}>
        <StyledIcon />
      </IconButton>
    </ButtonCircle>
  );
};

export default ScrollButton;