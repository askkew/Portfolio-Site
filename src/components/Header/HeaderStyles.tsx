import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderBox = styled('header')({
  backdropFilter: 'blur(4px)',
  background: 'transparent',
  color: "#e6f1ff",
  padding: "33px",
  position: "fixed",
  width: "100%",
  height: "100px",
  boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  transition: 'top 0.3s',
  zIndex: 98,
})

export const Container = styled('div')({
  maxWidth: "1200px",
  margin: "0 auto",
})

export const NavContainer = styled('div')({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  '@media (max-width: 1022px)': {
    alignContent: "right",
    justifyContent: "right",
  },
})

export const LogoButton = styled('div')({
  fontSize: "1.5rem",
  cursor: "pointer",
})

export const MobileNavArea = styled('nav')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "4rem",
  padding: "2rem",
})

export const NavArea = styled('nav')({
  display: "flex",
  gap: "4rem",
})

export const DesktopNavArea = styled('nav')({
  display: "flex",
  gap: "4rem",
  '@media (max-width: 1022px)': {
    display: "none",
  },
})

export const StyledIconButton = styled(IconButton)({
  display: "none",
  '@media (max-width: 1022px)': {
    display: "block",
  },
})

export const StyledDrawer = styled(Drawer)({
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiPaper-root': {
    backgroundColor: 'transparent !important',
    backdropFilter: 'blur(20px)',
  },
})

export const StyledMenuIcon = styled(MenuIcon)({
  color: "hsl(250, 89%, 79%)",
  transform: "scale(2)",
});
