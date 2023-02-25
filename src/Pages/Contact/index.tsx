import { StyledGithubIcon, StyledLinkedInIcon, StyledEmailIcon, ContactCard, SocialButtons, ContactDiv, ContactCardMessage, ContactCardInfo, ContactCardMessageTitle, ContactCardMessageText } from "./ContactStyles";
import { IconButton, Button, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Parallax } from "react-scroll-parallax";
import { StyledScrollButton } from "./icons";

const Contact = () => {
  return (
    <section id="contact" style={{  background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
      <ContactDiv>
        <Parallax translateX={[-200, 200]}>
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
            <span id='overlay'></span>
            <ContactCardMessageTitle>test</ContactCardMessageTitle>
          </ContactCardInfo>
        </ContactCard>
        </Parallax>
      </ContactDiv>
    </section> 
  );
};

export default Contact


{/* <SocialButtons>
                <IconButton color="primary" component="label">
                  <Link href="https://github.com/askkew" target="_blank" >
                    <StyledGithubIcon />
                  </Link>
                </IconButton>
                <IconButton color="primary" component="label">
                  <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
                    <StyledLinkedInIcon />
                  </Link>
                </IconButton>
                <IconButton color="primary" component="label" onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
                  <StyledEmailIcon />
                </IconButton>
              </SocialButtons> */}