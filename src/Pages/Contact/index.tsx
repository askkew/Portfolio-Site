import { StyledGithubIcon, StyledLinkedInIcon, StyledEmailIcon, ContactCard, SocialButtons, ContactDiv, ContactCardMessage, ContactCardInfo, ContactCardMessageTitle, ContactCardMessageText, CustomTextField } from "./ContactStyles";
import { IconButton, Button, Link, Typography, TextField, FormControlLabel, FormGroup } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Parallax } from "react-scroll-parallax";
import { StyledScrollButton } from "./icons";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" style={{  background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <ContactDiv>
        <Parallax translateX={[200, -200]}>
        <ContactCard>
          <ContactCardMessage>
            <ContactCardMessageTitle>Before you go!</ContactCardMessageTitle>
            <ContactCardMessageText>Thank you for checking out my page, I am currently looking to utilize my skills with a new team of creative designers and developers!</ContactCardMessageText>
            <SocialButtons>
              <IconButton color="primary">
                <Link href="https://github.com/askkew" target="_blank" >
                  <StyledGithubIcon />
                </Link>
              </IconButton>
              <IconButton color="primary">
                <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
                  <StyledLinkedInIcon />
                </Link>
              </IconButton>
              <IconButton color="primary" onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
                <StyledEmailIcon />
              </IconButton>
            </SocialButtons>
          </ContactCardMessage>
          <ContactCardInfo>
            <ContactCardMessageTitle>Contact me</ContactCardMessageTitle>
            <FormGroup>
              <CustomTextField />
              <CustomTextField />
              <CustomTextField />
              <Button variant="contained" color="primary">Send</Button>
            </FormGroup>
          </ContactCardInfo>
        </ContactCard>
        </Parallax>
      </ContactDiv>
    </section> 
  );
};

export default Contact
