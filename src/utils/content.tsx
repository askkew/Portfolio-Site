import { Keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const primary = "#435058";

export const secondary = "#DCF763";

export const tertiary = "#848C8E";


export const headerColor = "rgb(24,25,28)";

export const mainColor = "rgb(26,25,29)";

export const primaryColor = "hsl(213, 89%, 79%)";

export const RowDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const ColumnDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const fadeIn = (direction: string, type: any, delay: any, duration: any) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};