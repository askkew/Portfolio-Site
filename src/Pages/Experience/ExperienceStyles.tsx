import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography } from "@mui/material";

export const ExperienceDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const LeftRowDiv = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "left",
  backdropFilter: "blur(10px)",
  width: "50%",
  height: "330px",
  border: "1px solid white",
  margin: "0",
  padding: "0",
  '@media (max-width: 868px)': {
    width: "80%",
  },
})

export const RightRowDiv = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
  alignItems: "right",
  backdropFilter: "blur(10px)",
  width: "50%",
  height: "330px",
  border: "1px solid white",
  margin: "0",
  padding: "0",
  '@media (max-width: 868px)': {
    width: "80%",
    justifyContent: "left",
    alignItems: "left",
  },
})

export const ExperienceTitleTypograph = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: 10,
  '@media (max-width: 768px)': {
    fontSize: "4rem",
  },
});

export const TemporarySquare = styled("div")({
  position: "absolute",
  left: "-20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "360px",
  height: "300px",
  border: "2px solid gainsboro",
  margin: "0",
  padding: "0",
});

export const TemporarySquareRight = styled("div")({
  position: "absolute",
  right: "-20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "360px",
  height: "300px",
  border: "2px solid gainsboro",
  margin: "0",
  padding: "0",
});

export const ExperienceTypograph = styled(Typography)({
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
