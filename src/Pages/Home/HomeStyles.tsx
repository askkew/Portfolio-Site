import { styled } from "@mui/system";
import { Canvas } from "@react-three/fiber";
import { StyledButton } from "../../utils/Button";

export const HomeDiv = styled('div')({
});

export const NameTypograph = styled('h1')({
  fontSize: '3.6em',
  fontWeight: '1500',
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 368px)': {
    fontSize: "1.6rem",
  },
  wrap: "nowrap",
});

export const ResumeStyledButton = styled(StyledButton)({
  marginTop: "5px",
  width: "180px",
  '@media (max-width: 268px)': {
    display: 'none',
  },
});

export const ResumeStyledButtonIcon = styled(StyledButton)({
  marginTop: "5px",
  width: "50px",
  display: 'none',
  '@media (max-width: 268px)': {
    display: 'flex',
  },
});