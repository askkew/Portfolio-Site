import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography, Card, CardContent } from "@mui/material";

export const ExperienceDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  '@media (max-width: 868px)': {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const SecondExperienceDiv = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '0px,100px,0px,100px',
  '@media (max-width: 1068px)': {
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const ExperienceCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  boxShadow: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  width: "500px",
  height: "500px",
  margin: 10,
  padding: 15,
  zIndex: 88,
  '@media (max-width: 768px)': {
    width: "340px",
    height: "340px",
    justifyContent: "center",
  },
});

export const ExperienceCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
});

export const ExperienceTitleTypograph = styled(Typography)({
  fontSize: "2.2rem",
  marginBottom: "10px",
  fontWeight: "bold",
  textShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  color: "#e6f1ff",
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const ExperienceTypograph = styled(Typography)({
  fontSize: "0.9rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const MedPLUS = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  left: "400px",
  '@media (max-width: 1268px)': {
    left: "auto",
  },
});

export const TDSC = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  right: "400px",
  '@media (max-width: 1268px)': {
    right: "auto",
  },
});

export const Description = styled(ExperienceTypograph)({
  fontSize: "1.2rem",
  width: "50%",
  textAlign: "center",
  position: "relative",
  right: "300px",
});