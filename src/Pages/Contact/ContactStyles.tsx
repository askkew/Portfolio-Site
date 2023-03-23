import React from "react";
import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { primary, secondary, tertiary } from "../../utils/content";
import { IconButton, Button, Link, Typography, Card, InputBase } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const ContactDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 'fit-content',
  maxHeight: 'fit-content',
});

export const ContactCard = styled('form')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: 'transparent' ,
  border: 'none',
  boxShadow: 'none',
  gap: '15px',
  width: "500px",
  // backgroundColor: 'red',
  paddingBottom: '10px',
  paddingLeft: '20px',
});

export const ContactCardMessageTitle = styled('h1')({
  fontSize: "2.2rem",
  marginBottom: "5px",
  marginLeft: "10px",
  fontWeight: "200",
  color: "white",
  '@media (max-width: 768px)': {
    fontSize: "1.8rem",
  },
});

export const SocialButtons = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: '30px',
  gap: '50px',
});

export const CustomTextField = styled(InputBase)({
  width: '90%',
  height: '50px',
  margin: '10px',
  padding: '10px',
  color: 'rgb(44,47,52)',
  borderRadius: '10px',
  backgroundColor: 'white',
});
