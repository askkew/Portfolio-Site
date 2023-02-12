import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import { styled } from "@mui/system";
import { Button, Box } from "@mui/material";
import './Headerstyles.css';

//#0a192f

const HeaderBox = styled('header')({
  background: "black",
  color: "#e6f1ff",
  padding: "33px",
  position: "fixed",
  width: "100%",
  height: "13%",
  boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
})

const Container = styled('div')({
  maxWidth: "1200px",
  margin: "0 auto",
})

const NavContainer = styled('div')({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
})

const LogoButton = styled('div')({
  fontSize: "1.5rem",
  cursor: "pointer",
})

const NavArea = styled('nav')({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContents: "center",
  gap: "10rem",
})


const Header = () => {

  const navLinks = ["about", "projects", "experience", "contact"];

  const renderNavLink = (content: any) => {

    const scrollToId = `${content.toLowerCase()}`;

    const handleClickNav = () => {
      document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
      <ul key={content}>
        <li>
          <button className="glowing-btn" onClick={handleClickNav}><span className="glowing-txt">{content}</span></button>
        </li>
      </ul>
    );
  }
  return (
    <HeaderBox>
      <Container>
        <NavContainer>
          {/* <LogoButton>Home</LogoButton> */}
          <NavArea>
            {navLinks.map((nav) => renderNavLink(nav))}
          </NavArea>
        </NavContainer>
        {/* <button class='glowing-btn'>
          <span class='glowing-txt'>
          C
          <span class='faulty-letter'>
          L
          </span>
          ICK
          </span>
          </button> */}
      </Container>
    </HeaderBox>
  );
};

export default Header