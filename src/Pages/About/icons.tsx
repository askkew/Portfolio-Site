import styled from '@mui/material/styles/styled'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { primaryColor } from '../../utils/content'
import { IconButton } from '@mui/material'
import { transcode } from 'buffer'
import { StyledSpan } from './AboutStyles'

const IconStyle = {
  fontSize: 68,
  marginRight: 10,
}

export const ToolIcons = [
  <SiJavascript className="glowing-txt" style={IconStyle} />,
  <SiTypescript className="glowing-txt" style={IconStyle} />,
  <DiMysql className="glowing-txt" style={IconStyle} />,
  <FaHtml5 className="glowing-txt" style={IconStyle} />,
  <FaCss3Alt className="glowing-txt" style={IconStyle} />,
  <DiMongodb className="glowing-txt" style={IconStyle} />,
  <FaReact className="glowing-txt" style={IconStyle} />,
  <SiRedux className="glowing-txt" style={IconStyle} />,
  <FaNodeJs className="glowing-txt" style={IconStyle} />,
  // <FaBootstrap className="glowing-txt" style={IconStyle} />
]

export const ToolIconLabel = [
  <StyledSpan className="glowing-txt">JavaScript</StyledSpan>,
  <StyledSpan className="glowing-txt">TypeScript</StyledSpan>,
  <StyledSpan className="glowing-txt">MySQL</StyledSpan>,
  <StyledSpan className="glowing-txt">HTML5</StyledSpan>,
  <StyledSpan className="glowing-txt">CSS3</StyledSpan>,
  <StyledSpan className="glowing-txt">MongoDB</StyledSpan>,
  <StyledSpan className="glowing-txt">React</StyledSpan>,
  <StyledSpan className="glowing-txt">Redux</StyledSpan>,
  <StyledSpan className="glowing-txt">NodeJS</StyledSpan>,
  // <StyledSpan className="glowing-txt">Bootstrap</StyledSpan>
]

export const StyledScrollButton = styled(IconButton)({
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