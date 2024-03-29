import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography } from "@mui/material";

export const StyledFooter = styled("footer")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  background: "rgb(24,24,27)",
  width: "100%",
  height: "20%",
  padding: "15px",
});

export const DetailTypograph = styled(Typography)({
  fontSize: "0.9rem",
  fontWeight: "580",
  color: "darkgrey",
  margin: "0",
  marginLeft: "1rem",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  // '@media (max-width: 368px)': {
  //   display: 'none',
  // },
});

export const SocialButtons = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "1rem",
  '@media (max-width: 368px)': {
    display: 'none',
  },
});