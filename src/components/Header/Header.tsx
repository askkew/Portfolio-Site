import { Button } from "@mui/material";
import React, { Component } from "react";
import { useState } from "react";
import { SendStyledButton } from "../../Pages/Contact/ContactStyles";
import { StyledButton } from "../../utils/Button";
import { StyledDrawer, HeaderBox, Container, NavContainer, MobileNavArea, DesktopNavArea, NavArea, StyledIconButton, StyledMenuIcon } from "./HeaderStyles";

//#0a192f

const Header = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      (document.getElementById("navbar")as HTMLInputElement).style.top = "0";
    } else {
      (document.getElementById("navbar")as HTMLInputElement).style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }


  //================================================================================================
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const navLinks = ["about", "work", "contact"];

  const renderNavLink = (content: any) => {

    const scrollToId = `${content.toLowerCase()}`;

    const handleClickNav = () => {
      if (window.innerWidth > 768) {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        document.getElementById(scrollToId)?.scrollIntoView(true);
      }
    }

    return (
      <ul key={content}>
        <li>
          <StyledButton onClick={handleClickNav}>
            <span style={{marginLeft: '9px'}}>{content}</span>
          </StyledButton>
        </li>
      </ul>
    );
  }
  return (
    <HeaderBox id="navbar">
      <Container>
        <NavContainer>
          <NavArea>
            <StyledIconButton onClick={toggleOpen}>
              <StyledMenuIcon />
            </StyledIconButton>
            <StyledDrawer anchor="top" open={open} onClose={toggleOpen}>
              <MobileNavArea>
                {navLinks.map((nav) => renderNavLink(nav))}
              </MobileNavArea>
            </StyledDrawer>
            <DesktopNavArea>
              {navLinks.map((nav) => renderNavLink(nav))}
            </DesktopNavArea>
          </NavArea>
        </NavContainer>
      </Container>
    </HeaderBox>
  );
};

export default Header