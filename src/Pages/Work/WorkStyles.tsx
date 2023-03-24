import styled from '@emotion/styled';
import { RowDiv } from '../../utils/content';
import { IconButton, Button, Link, Typography } from '@mui/material';

export const ProjectContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const ProjectDiv = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  // flexDirection: 'row',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  '@media (max-width: 1068px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});

export const ProjectCard = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  backgroundColor: 'rgb(16,12,40)',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  padding: '7px',
  borderRadius: '15px',
  width: '285px',
  height: '378px',
  '@media (max-width: 368px)': {
    width: '200px',
  },
});

export const ProjectTitleTypograph = styled('h1')({
  fontSize: "1.7rem",
  fontWeight: "700",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  // padding: 10,
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const WorkIntroDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '50px',
});

export const WorkTitle = styled('h1')({
  fontSize: "2.2rem",
  fontWeight: "200",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: 10,
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const WorkTitleDescription = styled('h1')({
  fontSize: "1.4rem",
  fontWeight: "200",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: 10,
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const ProjectDescription = styled('h1')({
  fontSize: "0.9rem",
  textAlign: "center",
  fontWeight: "200",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: 10,
  '@media (max-width: 768px)': {
    fontSize: "1rem",
  },
});

export const ProjectTypograph = styled('h1')({
  fontSize: "1.4rem",
  fontWeight: "700",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  padding: "0",
  '@media (max-width: 768px)': {
    fontSize: "0.8rem",
  },
});

export const ProjectTagOne = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  // textShadow: "0px 0px 10px #000000",
  color: "rgb(78,87,116)",
  margin: "0",
  padding: "0",
});

export const ProjectTagTwo = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  // textShadow: "0px 0px 10px #000000",
  color: "rgb(48,68,82)",
  margin: "0",
  padding: "0",
});

export const ProjectTagThree = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  // textShadow: "0px 0px 10px #000000",
  color: "rgb(108,55,90)",
  margin: "0",
  padding: "0",
});

export const ProjectTagFour = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  // textShadow: "0px 0px 10px #000000",
  color: "rgb(108,55,90)",
  margin: "0",
  padding: "0",
});

export const TagsDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
});

export const GithubIconButton = styled(IconButton)({
  backgroundImage: 'linear-gradient(#bdc3c7, #2c3e50)',
  border: 0,
  // boxShadow: 'rgba(0, 0, 0, .3) 0 5px 15px',
  boxSizing: 'border-box',
  borderRadius: '50px',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '.7em',
  margin: '5px',
  textAlign: 'center',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  // position: 'relative',
  left: '150%',
});

export const LinkIconButton = styled(IconButton)({
  backgroundImage: 'linear-gradient(#bdc3c7, #2c3e50)',
  border: 0,
  // boxShadow: 'rgba(0, 0, 0, .3) 0 5px 15px',
  boxSizing: 'border-box',
  borderRadius: '50px',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '.7em',
  margin: '5px',
  textAlign: 'center',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  // position: 'relative',
  right: '150%',
});

export const LinkButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  zIndex: 100,
  top: '1%',
})

export const ProjectImage = styled('img')({
  height: '50%',
  '@media (max-width: 368px)': {
    height: '30%',
  },
});