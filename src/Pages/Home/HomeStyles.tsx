import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const TitleDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // //background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
  color: "#e6f1ff",
  fontSize: "2rem",
  textAlign: "center",
  textShadow: "0px 0px 10px #000000",
  backgroundClip: "border-box",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const NameTypograph = styled(Typography)({
  fontFamily: '"Raleway", sans-serif',
  fontSize: '2em',
  fontWeight: '400',
  letterSpacing: '1em',
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const SubtitleTypograph = styled(Typography)({
  fontFamily: '"Raleway", sans-serif',
  fontSize: '1em',
  fontWeight: '400',
  letterSpacing: '1em',
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.6rem",
  },
});