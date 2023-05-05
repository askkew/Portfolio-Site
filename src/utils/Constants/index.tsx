import html from "./language/html.png";
import css from "./language/css.png";
import javascript from "./language/javascript.png";
import typescript from "./language/typescript.png";
import reactjs from "./language/reactjs.png";
import redux from "./language/redux.png";
import java from "./language/java.png";
import nodejs from "./language/nodejs.png";
import mongodb from "./language/mongodb.png";
import php from "./language/php.png";
import sql from "./language/sql.png";
import bootstrap from "./language/bootstrap.png";
import angular from "./language/angular.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GrReactjs } from "react-icons/gr";
import { AiTwotoneBuild } from "react-icons/ai";
import styled from "@emotion/styled";

const firstTag = 'rgb(116, 78, 87)';
const secondTag = 'rgb(48,68,82)';
const thirdTag = 'rgb(108,55,90)';
const fourthTag = 'rgb(78, 116, 87)';
const fifthTag = 'rgb(87, 78, 116)';

const StyledWebIcon = styled(HiOutlineDesktopComputer)({
  fontSize: "2.5rem",
  color: "#fff",
  margin: "0 0.5rem",
});

const StyledReactIcon = styled(GrReactjs)({
  fontSize: "2.5rem",
  color: "#fff",
  margin: "0 0.5rem",
});

const StyledBuildIcon = styled(AiTwotoneBuild)({
  fontSize: "2.5rem",
  color: "#fff",
  margin: "0 0.5rem",
});

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const projectData = [
  {
    title: "Silver Armory",
    description: "Silver Armory is a website built to allow Destiny 2 users to view the inventories of other users' Guardians from a database used by over a million players daily.",
    githublink: "https://github.com/askkew/Silver-Armory",
    link: "https://silver-armory.netlify.app/",
    image: "/workimages/silversecondary.png",
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
    ],
  },
  {
    title: "Portfolio Site",
    description: "This is my portfolio site that is built around ReactJS and Typescript, using many libraries such as ThreeJS and Framer Motion",
    githublink: "https://github.com/askkew/Portfolio-Site",
    link: "https://lucasoverbey.dev",
    image: "/workimages/testportfolio.png",
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "threejs",
        color: thirdTag,
      },
      {
        name: "framermotion",
        color: fourthTag,
      },
    ],
  },
  {
    title: "TDSC",
    description: "TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days.",
    githublink: "https://github.com/snyperifle/TDSC",
    link: "https://tdscbeta.netlify.app/",
    image: "/workimages/TDSCtest.png",
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
    ],
  },
  {
    title: "MedPLUS",
    description: "MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.",
    githublink: "https://github.com/snyperifle/medPlus",
    link: "https://snyperifle.github.io/medPlus/",
    image: "/workimages/medplustest.png",
    imageSize: 50,
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
    ],
  },
  {
    title: "Job Tracker",
    description: "This is a basic MERN stack application that allows users to track their job applications. Using a mongoDB backend to store job applications",
    githublink: "https://github.com/askkew/Job-Tracker",
    link: "https://github.com/askkew/Job-Tracker",
    image: "/workimages/test.png",
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
      {
        name: "mongodb",
        color: fourthTag,
      },
    ],
  },
  {
    title: "Techlite",
    description: "Techlite is an E-commerce website built on the LAMP stack and designed by a team of students as a term project.",
    githublink: "https://github.com/Scrub-Sauce/Scared2Compile",
    link: "https://github.com/Scrub-Sauce/Scared2Compile",
    image: "/workimages/techlitetest.png",
    tags: [
      {
        name: "javascript",
        color: firstTag,
      },
      {
        name: "php",
        color: secondTag,
      },
      {
        name: "css",
        color: thirdTag,
      },
      {
        name: "mysql",
        color: fourthTag,
      },
    ],
  },
  {
    title: "Weather app",
    description: "This is a basic MERN stack application that allows users to get the current weather details as well as the following 6 day forecast for any city.",
    githublink: "https://github.com/askkew/WeatherApp",
    link: "https://weather-app-askew.netlify.app/",
    image: "/workimages/weathertest.png",
    tags: [
      {
        name: "react",
        color: firstTag,
      },
      {
        name: "typescript",
        color: secondTag,
      },
      {
        name: "nodejs",
        color: thirdTag,
      },
      {
        name: "mongodb",
        color: fourthTag,
      },
    ],
  },
]

const aboutDetails = [
  {
    title: "Web Development",
    description: "I combine technology with artistry, creating visually stunning websites with code, design, and UX skills.",
    icon: <StyledWebIcon />,
  },
  {
    title: "Full Stack Development",
    description: "I love creating dynamic web apps that engage users and solve complex problems. I'm always adopting new tools and languages to improve my workflow.",
    icon: <StyledReactIcon />,
  },
  {
    title: "Creative design",
    description: "I am constantly exploring new ideas and experimenting with different approaches to coding, pushing the boundaries of what is possible.",
    icon: <StyledBuildIcon />,
  },
]

export { projectData, technologies, aboutDetails}