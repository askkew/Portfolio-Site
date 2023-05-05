import styled from "@emotion/styled";

export const Wrapper = styled('div')({
  boxSizing: 'content-box',
  backgroundColor: 'transparent',
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 368px)': {
    flexDirection: 'column',
    height: '45px',
  },
});

export const Words = styled('div')({
  overflow: 'hidden',
});

export const ItemSpan = styled('div')({
  overflow: 'hidden',
  display: 'block',
  height: '100%',
  paddingLeft: '10px',
  color: 'hsl(195, 89%, 79%)',
});

export const Label1 = styled('p')({
  color: 'white',
  fontSize: '35px',
  '@media (max-width: 368px)': {
    fontSize: '20px',
  },
});

export const Container1 = styled('div')({
  fontSize: '35px',
  '@media (max-width: 368px)': {
    fontSize: '20px',
  },
});