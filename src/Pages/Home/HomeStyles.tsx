import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";

export const HomeDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  justifyItems: "center",
  alignItems: "center",
  height: '100%',
  width: '700px',
  '@media (max-width: 1068px)': {
    height: '50%',
    flexDirection: 'column',
    width: '400px',
  },
  '@media (max-width: 368px)': {
    width: '150px',
  },
});

export const Left = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  alignItems: "center",
});

export const Right = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  minWidth: "50%",
  width: "100%",
  '@media (max-width: 768px)': {
    // display: "none",
  },
});

export const RightRight = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  width: "20%",
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
    fontSize: "1.6rem",
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
    fontSize: "1rem",
  },
});

export const StyledCanvas = styled(Canvas)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  minWidth: "50%",
  '@media (max-width: 768px)': {
    // display: "none",
  },
});