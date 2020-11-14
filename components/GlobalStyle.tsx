import { createGlobalStyle } from 'styled-components';
import { tablet, desktop } from '../utils'

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 12pt;
    -ms-overflow-style: none;  // IE 10+
    &::-webkit-scrollbar {
      display: none; // Safari and Chrome
    }

    ${tablet`
      font-size: 1.5vmax;
      height:100%;
    `}
    ${desktop`
      font-size: 1.1vmax;
    `}
  }

  p{
    font-size: 1rem;
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    overflow-x: scroll;
    width:100%;
    display: flex;
    justify-content: flex-start;
    height: auto;
    color: rgba(255, 255, 255, 0.875);
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    flex-direction: column;
    align-items: flex-end;
    
    &:after{
      pointer-events: none;
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-attachment: fixed;
      background-color: #e1e6e1;
      background-image: url(public/overlay.png), url(public/bg.jpg);
      background-repeat: repeat, repeat-x;
      background-size: 128px 128px, cover;
    }
    ${tablet`
      height:100%;
      flex-direction: row;
      align-items: center;
    `}
  }

  .lds-default {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-default div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }
  .lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 29px;
    left: 53px;
  }
  .lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 18px;
    left: 50px;
  }
  .lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 9px;
    left: 41px;
  }
  .lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 6px;
    left: 29px;
  }
  .lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 9px;
    left: 18px;
  }
  .lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 18px;
    left: 9px;
  }
  .lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 29px;
    left: 6px;
  }
  .lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 41px;
    left: 9px;
  }
  .lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 50px;
    left: 18px;
  }
  .lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 53px;
    left: 29px;
  }
  .lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 50px;
    left: 41px;
  }
  .lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 41px;
    left: 50px;
  }
  @keyframes lds-default {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
`;
