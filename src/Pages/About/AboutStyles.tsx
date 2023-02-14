import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const AboutDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const SkillsDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid gainsboro",
  width: "30%",
  height: "30%",
  padding: '10rem',
  '@media (max-width: 768px)': {
    width: "80%",
    height: "80%",
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
  fontSize: "5.2rem",
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
  fontSize: "2.4rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.6rem",
  },
});