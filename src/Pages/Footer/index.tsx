import React, { useRef, useEffect } from 'react';
import '../../App.css'
import { IconButton, Link } from '@mui/material';
import { StyledFooter, DetailTypograph, SocialButtons } from './FooterStyles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  // const componentRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const componentOffsetTop = componentRef.current.offsetTop;
  //     if (scrollTop > componentOffsetTop) {
  //       window.scrollTo(0, componentOffsetTop);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <StyledFooter>
      <DetailTypograph>Designed and deployed by Lucas Overbey</DetailTypograph>
      <SocialButtons>
        <IconButton color="primary" component="label">
          <Link href="https://github.com/askkew" target="_blank" >
            <GitHubIcon style={{transform: 'scale(0.9)', margin: "0 5 0 5"}}/>
          </Link>
        </IconButton>
        <IconButton color="primary" component="label">
          <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
            <LinkedInIcon style={{transform: 'scale(0.9)', margin: "0 5 0 5"}}/>
          </Link>
        </IconButton>
        <IconButton color="primary" component="label" onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
          <EmailIcon style={{transform: 'scale(0.9)', margin: "0 5 0 5"}}/>
        </IconButton>
      </SocialButtons>
    </StyledFooter>
  );
}

export default Footer;