import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { IconButton, Button, Link, Typography } from "@mui/material";

export const StyledFooter = styled("footer")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: "black",
  width: "100%",
  height: "10%",
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
});

export const SocialButtons = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "left",
  marginRight: "1rem",
});