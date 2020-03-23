import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    background-color: #f5f5f5;
  }
  h1 {
    margin-bottom: 32px;
  }
  h3 {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #005662;
  text-transform: uppercase;
  }

`;
