import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const TitleDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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
  fontSize: "7.2rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const SubtitleTypograph = styled(Typography)({
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