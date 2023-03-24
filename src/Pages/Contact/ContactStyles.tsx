import React from "react";
import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { primary, secondary, tertiary } from "../../utils/content";
import { IconButton, Button, Link, Typography, Card, InputBase } from "@mui/material";

export const ContactDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
});

export const ContactContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "1200px",
  position: 'absolute',
  left: '40%',
});

export const ContactCard = styled('form')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'transparent' ,
  border: 'none',
  boxShadow: 'none',
  backdropFilter: 'blur(20px)',
  borderRadius: '30px',
  gap: '15px',
  width: "500px",
  paddingBottom: '10px',
  '@media (max-width: 768px)': {
    width: "90%",
  },
});

export const ContactCardMessageTitle = styled('h1')({
  fontSize: "2.2rem",
  marginBottom: "5px",
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
  gap: '50px',
  '@media (max-width: 768px)': {
    gap: '20px',
  },
});

export const CustomTextField = styled(InputBase)({
  width: '90%',
  height: '50px',
  margin: '10px',
  padding: '10px',
  color: 'rgb(44,47,52)',
  borderRadius: '10px',
  backgroundColor: 'gainsboro',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px inset',
});

export const CustomTextFieldMessage = styled(CustomTextField)({
  height: '120px',
});
