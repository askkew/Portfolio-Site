import React, { useRef, useEffect } from 'react';
import '../../App.css'
import { IconButton, Link } from '@mui/material';
import { StyledFooter, DetailTypograph, SocialButtons } from './FooterStyles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { GrMail, GrGithub, GrLinkedin} from 'react-icons/gr';

const Footer = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:lucasaoverbey@gmail.com';
  };

  return (
    <StyledFooter>
      <div>
        <DetailTypograph>Lucas Overbey</DetailTypograph>
        <DetailTypograph>© 2023, Built and designed by Lucas Overbey</DetailTypograph>
      </div>
      <SocialButtons>
        <IconButton color="primary" component="label">
          <Link href="https://github.com/askkew" target="_blank" >
            <GrGithub style={{transform: 'scale(0.9)', margin: "0 5 0 5", color: 'hsl(195, 89%, 79%)'}}/>
          </Link>
        </IconButton>
        <IconButton color="primary" component="label">
          <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
            <GrLinkedin style={{transform: 'scale(0.9)', margin: "0 5 0 5", color: 'hsl(195, 89%, 79%)'}}/>
          </Link>
        </IconButton>
        <IconButton color="primary" component="label" onClick={handleMailClick}>
          <div>
            <GrMail style={{transform: 'scale(0.9)', margin: "0 5 0 5", color: 'hsl(195, 89%, 79%)'}}/>
          </div>
        </IconButton>
      </SocialButtons>
    </StyledFooter>
  );
}

export default Footer;