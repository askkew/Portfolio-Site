import { StyledGithubIcon, StyledLinkedInIcon, StyledEmailIcon, ContactCard, SocialButtons, ContactDiv, ContactCardMessage, ContactCardInfo, ContactCardMessageTitle, ContactCardMessageText, CustomTextField } from "./ContactStyles";
import { IconButton, Button, Link, Typography, TextField, FormControlLabel, FormGroup } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Parallax } from "react-scroll-parallax";
import { StyledScrollButton } from "./icons";
import { useState } from "react";
import Map from "../../components/Map";

const Contact = () => {

  return (
    <section id="contact">
      <ContactDiv>
        <ContactCardMessageTitle>Contact</ContactCardMessageTitle>
        <Map />
      </ContactDiv>
    </section> 
  );
};

export default Contact
