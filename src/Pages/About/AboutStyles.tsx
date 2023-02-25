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
  width: "50%",
  height: "220px",
  margin: 10,
  padding: 15,
  zIndex: 90,
  '@media (max-width: 768px)': {
    width: "90%",
    height: "200px",
  },
});

export const MapCard = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  backgroundColor: 'rgb(26,28,38)',
  width: "50%",
  height: "460px",
  margin: 10,
  padding: 15,
  zIndex: 90,
  '@media (max-width: 768px)': {
    width: "90%",
    height: "200px",
  },
})

export const SecondSkillsBox = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  '@media (max-width: 768px)': {
    flexDirection: "column",
  },
});

export const ToolSetCard = styled(AboutCard)({
  width: '1260px',
  height: '300px',
  '@media (max-width: 768px)': {
    height: '40%',
  },
});

export const ToolsetIcons = styled('div')({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "10px",
  padding: "10px",
});

export const SkillsBox = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
})

export const SkillsDiv = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  padding: "30px 30px 0px 30px",
  alignItems: "center",
  border: "2px solid gainsboro",
  width: "330px",
  height: "330px",
});

export const AboutTitleTypograph = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.5rem",
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
    fontSize: "0.8rem",
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
    fontSize: "0.8rem",
  },
});

export const StyledSpan = styled('span')({
  '@media (max-width: 1390px)': {
    display: "none",
  },
})
