import { createGlobalStyle } from 'styled-components';
import { tablet, desktop } from '../utils'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 12pt;
    ${tablet`
      font-size: 1.5vmax;
    `}
    ${desktop`
      font-size: 1.1vmax;
    `}
  }

  body {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    color: rgba(255, 255, 255, 0.875);
    ${tablet`
      height:100%;
    
    `}
  }
`;
