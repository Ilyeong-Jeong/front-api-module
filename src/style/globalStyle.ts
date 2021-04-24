import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * { 
    padding: 0; 
    margin : 0;
  } 

  html, body, #root {
    height: 100%;
  }
`;
 
export default GlobalStyle;