import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography } from "@mui/material";

export const ExperienveDiv = styled("div")({
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
  width: "60%",
  height: "35%",
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
  width: "60%",
  height: "35%",
  border: "1px solid white",
  margin: "0",
  padding: "0",
  '@media (max-width: 868px)': {
    width: "80%",
    justifyContent: "left",
    alignItems: "left",
  },
})