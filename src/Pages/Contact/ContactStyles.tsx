import React from "react";
import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { primary, secondary, tertiary } from "../../utils/content";
import { IconButton, Button, Link, Typography, Card, InputBase } from "@mui/material";
import { StyledButton } from "../../utils/Button";

export const ContactDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const ContactContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "1200px",
  '@media (max-width: 1068px)': {
    width: "100%",
  },
});

export const ContactCard = styled('form')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: 'transparent' ,
  paddingTop: '10px',
  backgroundColor: 'rgb(16,12,40)',
  borderRadius: '15px',
  border: 'none',
  boxShadow: 'none',
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
  '@media (max-width: 268px)': {
    fontSize: "1.3rem",
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
    flexDirection: "column",
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

export const StyledForm = styled('form')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
})

export const SendStyledButton = styled(StyledButton)({
  width: '50%',
  paddingLeft: '25px',
  marginTop: '10px',
  marginBottom: '10px',
  '@media (max-width: 268px)': {
    display: 'none',
  },
})

export const SendStyledButtonIcon = styled(StyledButton)({
  display: 'none',
  width: '50%',
  paddingLeft: '25px',
  marginTop: '10px',
  marginBottom: '10px',
  '@media (max-width: 268px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '13px',
  },
})

export const IconWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  '@media (max-width: 268px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '10px',
  },
})
