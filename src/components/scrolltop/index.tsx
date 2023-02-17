import react from "react";
import { ButtonCircle, StyledIcon, StyledScrollButton } from "./scrolltopstyles";

const ScrollButton = () => {

  const handleClickNav = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ButtonCircle>
      <StyledScrollButton disableRipple className="" aria-label="scroll to top" onClick={handleClickNav}>
        <StyledIcon className="glowing-txt" />
      </StyledScrollButton>
    </ButtonCircle>
  );
};

export default ScrollButton;