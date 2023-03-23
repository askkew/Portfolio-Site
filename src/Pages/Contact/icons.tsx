import styled from '@mui/material/styles/styled'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { primaryColor } from '../../utils/content'
import { IconButton, Link } from '@mui/material'
import { transcode } from 'buffer'

const IconStyle = {
  fontSize: 78,
}

export const ToolIcons = [
  <Link href="https://github.com/askkew" target="_blank" >
    <GitHubIcon className="glowing-txt" style={IconStyle} />
  </Link>,
  <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
    <LinkedInIcon className="glowing-txt" style={IconStyle} />
  </Link>,
  <EmailIcon onClick={() => window.open('mailto:lucasaoverbey@gmail.com')} className="glowing-txt" style={IconStyle} />,
]

export const ToolIconLabel = [
  <span className="glowing-txt">Github</span>,
  <span className="glowing-txt">Linkedin</span>,
  <span className="glowing-txt">Email</span>,
]

export const StyledSocialButton = styled(IconButton)({
  'position': 'relative',
  'color': 'var(--glow-color)',
  'cursor': 'pointer',
  'border': '0.15em solid var(--glow-color)',
  'border-radius': '0.45em',
  'background': 'none',
  'perspective': '2em',
  'font-family': '"Raleway", sans-serif',
  'font-size': '1em',
  'font-weight': '400',
  'letter-spacing': '0.8em',
  'box-shadow': 'inset 0px 0px 0.5em 0px var(--glow-color), 0px 0px 0.5em 0px var(--glow-color)',
  'animation': 'border-flicker 2s linear infinite',
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