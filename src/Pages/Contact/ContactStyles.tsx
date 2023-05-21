import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import { StyledButton } from "../../utils/Button";
import { RiSendPlaneFill } from "react-icons/ri";

export const ContactCard = styled('form')({
  display: "flex",
  width: 'clamp(250px, 50%, 650px)',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'rgb(24,24,27)',
  // backgroundColor: 'gainsboro',
  borderRadius: '15px',
  border: 'none',
  boxShadow: 'none',
  padding: '20px',
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
  backgroundColor: 'rgb(24,24,27)',
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
  paddingLeft: '25px',
  marginTop: '10px',
  marginBottom: '10px',
})

export const IconWrapper = styled('div')({
  marginBottom: '10px',
  padding: '5px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
})
