import { ContactCard, SocialButtons, ContactDiv, ContactCardMessageTitle, CustomTextField } from "./ContactStyles";
import { IconButton, Button, Link, Typography, TextField, FormControlLabel, FormGroup, InputBase, Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Parallax } from "react-scroll-parallax";
import { StyledSocialButton, ToolIconLabel, ToolIcons } from "./icons";
import { useState } from "react";
import Map from "../../components/Map";
import { StyledButton } from "../../utils/Button";

const Contact = () => {
  return (
    <section id="contact">
      <ContactDiv>
        <ContactCard>
          <ContactCardMessageTitle>Contact Me</ContactCardMessageTitle>
          <CustomTextField id="outlined-basic"/>
          <CustomTextField id="outlined-basic"/>
          <CustomTextField id="outlined-basic"/>
          <StyledButton style={{width: '90%', marginLeft: '10px'}}>Send</StyledButton>
          {/* <Divider style={{color: 'white', height: '10px'}}/> */}
          <ContactCardMessageTitle>Connect with me</ContactCardMessageTitle>
          <SocialButtons>
            {
              ToolIcons.map((icon, index) => {
                return (
                  <StyledSocialButton disableRipple key={index}>
                    {icon}
                  </StyledSocialButton>
                )
              })
            }
          </SocialButtons>
        </ContactCard>
        {/* <Map /> */}
      </ContactDiv>
    </section> 
  );
};

export default Contact
