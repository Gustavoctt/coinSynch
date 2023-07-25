import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-100: "#FFF6E8";
    --primary-200: "#FFE1B5";
    --primary-300: "#FFCD82";
    --primary-400: "#FFB94F";
    --primary-500: "#FBAB34";
    --primary-600: "#18B863";
    --primary-700: "#AD721A";
    --primary-800: "#7A4E0C";
    --primary-900: "#472C04";

    --secondary-100: "#F6F6F6";
    --secondary-200: "#F4F3F8";
    --secondary-300: "#E0DEEA";
    --secondary-400: "#ACABB7";
    --secondary-500: "#8C8A97";
    --secondary-600: "#716F7A";
    --secondary-700: "#5F5C6B";
    --secondary-800: "#4E4B59";
    --secondary-900: "#33303E";

    --tertiary-100: "#E8FAF1";
    --tertiary-200: "#D1F6E3";
    --tertiary-300: "#A4EDC6";
    --tertiary-400: "#8DE8B8";
    --tertiary-500: "#1BD171";
    --tertiary-600: "#18B863";
    --tertiary-700: "#149E55";
    --tertiary-800: "#0E6B3A";
    --tertiary-900: "#07381E";

    --quarternary-100: "#FFF2F3";
    --quarternary-200: "#FFCFD0";
    --quarternary-300: "#FF9497";
    --quarternary-400: "#FA7D80";
    --quarternary-500: "#EC3237";
    --quarternary-600: "#D42D31";
    --quarternary-700: "#A12226";
    --quarternary-800: "#6E171A";
    --quarternary-900: "#3B0C0E";

    --white: "#FFFFFF";
    --black: "#000000";
    --text-base: "5D6670";
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }
    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }
  
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
   cursor: pointer;
  }
`;
