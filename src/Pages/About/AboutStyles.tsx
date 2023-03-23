import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { DiPhp } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { styled } from "@mui/system";
import { Box, Card, Typography } from "@mui/material";

export const AboutDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: '100vh',
  width: '100%',
});

export const ToolsetIcons = styled('div')({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "10px",
  padding: "10px",
});

export const DetailsBox = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  textAlign: "left",
  alignItems: "center",
  width: "30%",
})

export const DetailTitle = styled('h1')({
  display: "flex",
  flexDirection: "row",
  fontSize: "2rem",
  fontWeight: "200",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  '@media (max-width: 768px)': {
    fontSize: "1.6rem",
  },
});

export const DetailSubTitle = styled('h1')({
  display: "flex",
  flexDirection: "row",
  fontSize: "3rem",
  fontWeight: "800",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "10",
  '@media (max-width: 768px)': {
    fontSize: "2rem",
  },
});

export const DetailDescription = styled('h1')({
  display: "flex",
  flexDirection: "row",
  fontSize: "1rem",
  fontWeight: "200",
  textShadow: "0px 0px 10px #000000",
  color: "#e6f1ff",
  margin: "0",
  '@media (max-width: 768px)': {
    fontSize: "0.7rem",
  },
});

export const BallContainer = styled('div')({
  width: "110px",
  height: "110px",
  '@media (max-width: 768px)': {
    width: "80px",
    height: "80px",
  },
  '@media (max-width: 368px)': {
    width: "45px",
    height: "45px",
  },
});

//==================================================================================================

const IconStyle = {
  fontSize: 36,
  marginRight: 10,
}

export const JSIcon = styled(SiJavascript)({
  color: '#f0db4f',
})

export const TSIcon = styled(SiTypescript)({
  color: '#007acc',
})

export const MySQLIcon = styled(DiMysql)({
  color: '#00758f',
})

export const HTMLIcon = styled(FaHtml5)({
  color: '#e34c26',
})

export const CSSIcon = styled(FaCss3Alt)({
  color: '#264de4',
})

export const MongoIcon = styled(DiMongodb)({
  color: '#47a248',
})

export const ReactIcon = styled(FaReact)({
  color: '#61dafb',
})

export const ReduxIcon = styled(SiRedux)({
  color: '#764abc',
})

export const NodeIcon = styled(FaNodeJs)({
  color: '#339933',
})

export const PHPIcon = styled(DiPhp)({
  color: '#777bb4',
})

export const BootstrapIcon = styled(FaBootstrap)({
  color: '#563d7c',
})

export const JavaIcon = styled(FaJava)({
  color: '#007396',
})

export const LanguageIcons = [
  <JSIcon style={IconStyle} />,
  <TSIcon style={IconStyle} />,
  <HTMLIcon style={IconStyle} />,
  <CSSIcon style={IconStyle} />,
  <BootstrapIcon style={IconStyle} />,
  <ReactIcon style={IconStyle} />,
  <ReduxIcon style={IconStyle} />,
  <MongoIcon style={IconStyle} />,
  <NodeIcon style={IconStyle} />,
  <PHPIcon style={IconStyle} />,
  <MySQLIcon style={IconStyle} />,
  <JavaIcon style={IconStyle} />,
]