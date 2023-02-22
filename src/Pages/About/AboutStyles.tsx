import React from "react";
import { styled } from "@mui/system";
import { Box, Card, Typography } from "@mui/material";

export const AboutDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const AboutCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  backgroundColor: 'rgb(26,28,38)',
  width: "350px",
  height: "480px",
  margin: 10,
  padding: 15,
  zIndex: 90,
  '&:hover': {
    // height: "580px",
    transform: 'scale(1.05)',
    transition: 'height 1.2s ease-in-out',
  },
});

export const LanguagesCard = styled(AboutCard)({
  height: "580px",
});

export const SoftwareDevelopmentCard = styled(AboutCard)({
  height: "480px",
});

export const ToolsetIcons = styled('div')({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "10px",
  padding: "10px",
  '@media (max-width: 768px)': {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const SkillsDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  padding: "30px 30px 0px 30px",
  alignItems: "center",
  border: "2px solid gainsboro",
  width: "330px",
  height: "330px",
  '@media (max-width: 768px)': {
    width: "80%",
    height: "10%",
    padding: '7rem 10rem 7rem 10rem',
  },
});

export const SkillsRowDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  '@media (max-width: 768px)': {
    flexDirection: "column",
  },
});

export const AboutTitleTypograph = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const SkillsTypograph = styled(Typography)({
  fontSize: "1.4rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const SkillsTypograph2 = styled(Typography)({
  textAlign: "center",
  fontSize: "0.9rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  paddingTop: "20px",
  '@media (max-width: 768px)': {
  },
});