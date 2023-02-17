import styled from '@emotion/styled';
import { RowDiv } from '../../utils/content';
import { IconButton, Button, Link, Typography } from '@mui/material';

export const ProjectDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LeftRowDiv = styled(RowDiv)({
  position: 'relative',
  display: "flex", 
  flexDirection: "row",
  justifyContent: "top",
  alignItems: "left",
  backdropFilter: "blur(10px)",
  // backgroundColor: "#e6f1ff",
  width: "900px",
  height: "530px",
  border: "1px solid white",
  margin: "0",
  padding: "0",
  '@media (max-width: 968px)': {
    width: "80%",
  },
  '@media (max-width: 668px)': {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})

export const ProjectTitleTypograph = styled(Typography)({
  fontSize: "2.2rem",
  fontWeight: "bold",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: 10,
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const PictureDiv = styled('div')({
  position: "absolute",
  right: "20px",
  '@media (max-width: 868px)': {
    right: "0px",
  },
});