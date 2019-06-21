import { createGlobalStyle } from 'styled-components';
import { tablet, desktop } from '../utils'

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 12pt;
    ${tablet`
      font-size: 1.5vmax;
      height:100%;
    `}
    ${desktop`
      font-size: 1.1vmax;
    `}
  }

  h1 {
    font-size: 2.5rem;
    margin-top: 0;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: -1.325rem;
      width: 3.5rem;
      height: 0.1rem;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  div{
    box-sizing: border-box;
  }

  body {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    color: rgba(255, 255, 255, 0.875);
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
    ${tablet`
      height:100%;
    
    `}
  }
`;
