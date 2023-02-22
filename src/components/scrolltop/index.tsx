import react from "react";
import { useState, useEffect } from "react";
import { ButtonCircle, StyledIcon, StyledScrollButton } from "./scrolltopstyles";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const homePage = document.getElementById("home");
      const atHomePage = homePage ? homePage.getBoundingClientRect().top === 0 : false;
      const atTopOfPage = document.documentElement.scrollTop === 0;
      setIsVisible(!atHomePage && !atTopOfPage);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickNav = () => {
    const homePage = document.getElementById("home");
    homePage?.scrollIntoView({ behavior: "smooth" });
    setIsVisible(false);
  }

  return isVisible ? (
    // <ButtonCircle className={isVisible ? "show" : ""}>
    <ButtonCircle>
      <StyledScrollButton disableRipple className="" aria-label="scroll to top" onClick={handleClickNav}>
        <StyledIcon className="glowing-txt" />
      </StyledScrollButton>
    </ButtonCircle>
  ) : null;
};

export default ScrollButton;