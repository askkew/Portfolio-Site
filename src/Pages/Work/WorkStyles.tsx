import styled from '@emotion/styled';
import { RowDiv } from '../../utils/content';
import { IconButton, Button, Link, Typography, Card } from '@mui/material';

export const ProjectContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const ProjectDiv = styled('div')({
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media (max-width: 1268px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  }
});

export const ProjectCard = styled(Card)({
  width: '400px',
  // height: '0px',
  borderRadius: '15px',
  backgroundColor: 'rgb(24,24,27)',
  padding: '15px',
})

export const WorkIntroDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
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

export const ProjectTagOne = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  color: "rgb(78,87,116)",
  margin: "0",
  padding: "0",
});

export const ProjectTagTwo = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  color: "rgb(48,68,82)",
  margin: "0",
  padding: "0",
});

export const ProjectTagThree = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  color: "rgb(108,55,90)",
  margin: "0",
  padding: "0",
});

export const ProjectTagFour = styled('h1')({
  fontSize: "1rem",
  fontWeight: "200",
  color: "rgb(108,55,90)",
  margin: "0",
  padding: "0",
});

export const TagsDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const TagP = styled('p')({
  textAlign: 'center',
  fontWeight: '600',
});

export const GithubIconButton = styled(IconButton)({
  backgroundImage: 'linear-gradient(#bdc3c7, #2c3e50)',
  border: 0,
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
  zIndex: 90,
})

export const ProjectImage = styled('img')({
  // height: '30%',
  '@media (max-width: 368px)': {
    height: '30%',
  },
});

export const LinkGithub = styled('a')({
  backdropFilter: 'blur(2px)',
  marginTop: '10px',
});

export const LinkLink = styled('a')({
  backdropFilter: 'blur(2px)',
});
