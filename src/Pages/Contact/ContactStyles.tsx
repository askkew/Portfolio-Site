import styled from "@emotion/styled";
import { RowDiv } from "../../utils/content";
import { InputBase } from "@mui/material";
import { StyledButton } from "../../utils/Button";

export const ContactDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const ContactContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "1200px",
  '@media (max-width: 1068px)': {
    width: "100%",
  },
});

export const ContactCard = styled('form')({
  display: "flex",
  width: 'clamp(40%, 700px, 50%)',
  minWidth: "285px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: '10px',
  backgroundColor: 'rgb(16,12,40)',
  borderRadius: '15px',
  border: 'none',
  boxShadow: 'none',
  gap: '15px',
  paddingBottom: '10px',
  '@media (max-width: 368px)': {
    width: '200px',
    minWidth: '200px',
  },
});

export const ContactCardMessageTitle = styled('h1')({
  fontSize: "2.2rem",
  marginBottom: "5px",
  fontWeight: "200",
  color: "white",
  '@media (max-width: 768px)': {
    fontSize: "1.8rem",
  },
  '@media (max-width: 268px)': {
    fontSize: "1.3rem",
  },
});

export const ContactCardSocialTitle = styled('h1')({
  fontSize: "2.2rem",
  marginBottom: "5px",
  fontWeight: "200",
  color: "white",
  '@media (max-width: 768px)': {
    fontSize: "1.5rem",
  },
  '@media (max-width: 268px)': {
    fontSize: "1rem",
  },
});

export const SocialButtons = styled(RowDiv)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: '50px',
  '@media (max-width: 768px)': {
    gap: '20px',
    flexDirection: "column",
  },
});

export const CustomTextField = styled(InputBase)({
  width: '90%',
  maxWidth: '550px',
  height: '50px',
  margin: '10px',
  padding: '10px',
  color: 'gainsboro',
  fontWeight: 'bold',
  fontSize: '15px',
  borderRadius: '10px',
  backgroundColor: 'rgb(5,8,22)',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px inset',
  '@media (max-width: 368px)': {
    fontSize: '13px',
  },
});

export const CustomTextFieldMessage = styled(CustomTextField)({
  height: '120px',
  maxWidth: '550px',
});

export const StyledForm = styled('form')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
})

export const SendStyledButton = styled(StyledButton)({
  width: '50%',
  paddingLeft: '25px',
  marginTop: '10px',
  marginBottom: '10px',
  '@media (max-width: 668px)': {
    display: 'none',
  },
})

export const SendStyledButtonIcon = styled(StyledButton)({
  display: 'none',
  width: '50%',
  paddingLeft: '25px',
  marginTop: '10px',
  marginBottom: '10px',
  '@media (max-width: 668px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '13px',
  },
})

export const IconWrapper = styled('div')({
  marginBottom: '10px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  '@media (max-width: 368px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '10px',
  },
})
