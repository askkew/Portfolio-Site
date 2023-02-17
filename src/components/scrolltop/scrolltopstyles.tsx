import { styled } from "@mui/system";
import { Box, IconButton, Typography } from '@mui/material';
import { mainColor } from "../../utils/content";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export const ButtonCircle = styled('div')({
  position: 'fixed',
  bottom: '75px',
  right: '75px',
  width: '50px',
  height: '50px',
});

export const StyledIcon = styled(KeyboardDoubleArrowUpIcon)({

});


export const StyledScrollButton = styled(IconButton)({
  'position': 'relative',
  'color': 'var(--glow-color)',
  'cursor': 'pointer',
  'padding': '1em 1.0em',
  'border': '0.15em solid var(--glow-color)',
  'border-radius': '0.45em',
  'background': 'none',
  'perspective': '2em',
  'font-family': '"Raleway", sans-serif',
  'font-size': '1em',
  'font-weight': '400',
  'letter-spacing': '1em',
  'box-shadow': 'inset 0px 0px 0.5em 0px var(--glow-color), 0px 0px 0.5em 0px var(--glow-color)',
  'animation': 'border-flicker 2s linear infinite',
  '& .StyledIcon': {
    'float': 'left',
    // 'margin-right': '-0.8em',
    'text-shadow': '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color)',
    'animation': 'text-flicker 3s linear infinite',
    '&.faulty-letter': {
      'opacity': '0.5',
      'animation': 'faulty-flicker 2s linear infinite'
    }
  },
  '&::after': {
    'content': '""',
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'opacity': 0,
    'z-index': -1,
    'background-color': 'var(--glow-color)',
    'box-shadow': '0 0 2em 0.2em var(--glow-color)',
    'transition': 'opacity 100ms linear'
  },
  '&:hover': {
    'color': 'rgba(0, 0, 0, 0.8)',
    'text-shadow': 'none',
    'animation': 'none',
    '& .glowing-txt': {
      'animation': 'none'
    },
    '& .faulty-letter': {
      'animation': 'none',
      'text-shadow': 'none',
      'opacity': '1'
    },
    '&::before': {
      'filter': 'blur(1.5em)',
      'opacity': 1
    },
    '&::after': {
      'opacity': 1
    }
  }
});