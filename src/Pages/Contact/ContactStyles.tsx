import React from "react";
import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const ContactCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "left",
  backgroundColor: "transparent",
  border: 'none',
  boxShadow: 'none',
  padding: "1rem",
  width: "60%",
});

export const SocialButtons = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "left",
})

export const NameTypograph = styled(Typography)({
  fontSize: "3.5rem",
  fontWeight: "bold",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const SubtitleTypograph = styled(Typography)({
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.6rem",
  },
});

export const SubtitleTypograph2 = styled(Typography)({
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.6rem",
  },
});

export const StyledGithubIcon = styled(GitHubIcon)({
  transform: 'scale(2.6)',
  margin: 15,
  color: 'hsl(213, 89%, 79%)',
  '&:hover': {
    color: 'hsl(213, 89%, 79%)',
  },
});

export const StyledLinkedInIcon = styled(LinkedInIcon)({
  transform: 'scale(2.6)',
  margin: 15,
  color: 'hsl(213, 89%, 79%)',
  '&:hover': {
    color: 'hsl(213, 89%, 79%)',
  },
});

export const StyledEmailIcon = styled(EmailIcon)({
  transform: 'scale(2.6)',
  margin: 15,
  color: 'hsl(213, 89%, 79%)',
  '&:hover': {
    color: 'hsl(213, 89%, 79%)',
  },
});