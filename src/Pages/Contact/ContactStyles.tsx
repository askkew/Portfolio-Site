import React from "react";
import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography, Card } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const ContactDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const ContactCard = styled(Card)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "top",
  borderRadius: "2rem",
  backgroundColor: 'rgb(255, 255, 255)',
  width: "1000px",
  height: "500px",
  margin: 10,
  zIndex: 88,
  '@media (max-width: 768px)': {
    width: "470px",
    height: "840px",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export const ContactCardMessage = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  borderRadius: "2rem 2rem 0rem 2rem",
  width: "50%",
  height: "100%",
  backgroundColor: "hsl(213, 89%, 79%)",
  '@media (max-width: 768px)': {
    width: "100%",
    height: "50%",
  },
});

export const ContactCardMessageTitle = styled(Typography)({
  fontSize: "2.2rem",
  marginBottom: "10px",
  fontWeight: "bold",
  color: "white",
  '@media (max-width: 768px)': {
    fontSize: "1.8rem",
  },
});

export const ContactCardMessageText = styled(Typography)({
  fontSize: "1.2rem",
  marginBottom: "10px",
  fontWeight: "bold",
  color: "white",
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const OverlaySpan = styled('span')({
  alignItems: "left",
  backgroundColor: 'rgb(154, 197, 249)',
  ':after': {
    content: '""',
    position: "absolute",
    bottom: 10,
    left: 508,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export const ContactCardInfo = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: "2rem 2rem 0rem 2rem",
  width: "50%",
  height: "100%",
  '@media (max-width: 768px)': {
    width: "100%",
    height: "50%",
  },
});

export const SocialButtons = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "left",
});

export const StyledGithubIcon = styled(GitHubIcon)({
  transform: 'scale(2.6)',
  margin: 15,
  color: 'linear-gradient(#8614f8 0, #760be0 100%)',
  '&:hover': {
    opacity: .7,
  },
});

export const StyledLinkedInIcon = styled(LinkedInIcon)({
  transform: 'scale(2.6)',
  margin: 15,
  color: 'linear-gradient(#8614f8 0, #760be0 100%)',
  '&:hover': {
    opacity: .7,
  },
});

export const StyledEmailIcon = styled(EmailIcon)({
  transform: 'scale(2.6)',
  margin: 15,
  color: 'linear-gradient(#8614f8 0, #760be0 100%)',
  '&:hover': {
    opacity: .7,
  },
});