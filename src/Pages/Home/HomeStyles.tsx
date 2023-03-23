import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";

export const HomeDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: '100%',
  width: '100%',
});

export const Left = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  alignItems: "flex-end",
});

export const Right = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  width: "50%",
  '@media (max-width: 768px)': {
    display: "none",
  },
});

export const RightRight = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  width: "50%",
  '@media (max-width: 768px)': {
    display: "none",
  },
})

export const NameTypograph = styled('h1')({
  fontSize: '2em',
  fontWeight: '600',
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const SubtitleTypograph = styled('h1')({
  fontSize: '2em',
  fontWeight: '200',
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.6rem",
  },
});

export const StyledCanvas = styled(Canvas)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  '@media (max-width: 768px)': {
    display: "none",
  },
});