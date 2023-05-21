import { styled } from "@mui/system";
import { Canvas } from "@react-three/fiber";
import { StyledButton } from "../../utils/Button";

export const HomeDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  justifyItems: "center",
  alignItems: "center",
  height: '100%',
  width: '400px',
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
  justifyContent: "left",
  height: "100%",
  width: "100%",
  alignItems: "left",
  marginLeft: "10px",
  '@media (max-width: 468px)': {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0px",
  },
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
})

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