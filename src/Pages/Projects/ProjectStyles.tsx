import styled from '@emotion/styled';
import { RowDiv } from '../../utils/content';
import { IconButton, Button, Link, Typography } from '@mui/material';

export const ProjectDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

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