import { styled } from "@mui/system";
import { Box, Typography } from '@mui/material';
import { mainColor } from "../../utils/content";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export const ButtonCircle = styled('div')({
  position: 'fixed',
  bottom: '75px',
  right: '75px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'transparent',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: '2px solid darkgrey',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'transparent',
    transform: 'scale(1.2)',
    border: '2px solid hsl(213, 89%, 79%)',
  },
});

export const StyledIcon = styled(KeyboardDoubleArrowUpIcon)({
  color: 'darkgrey',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'transparent',
    transform: 'scale(1.2)',
    color: 'hsl(213, 89%, 79%)',
  },
});