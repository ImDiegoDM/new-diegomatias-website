import {css} from 'styled-components'

interface overlayGradientOptions{
  color1?:string;
  color2?:string;
  color3?:string;
  grainyFactor?:number;
}

const defaultValue = {
  grainyFactor:1,
  color1: 'rgba(114, 97, 147, 0.25)',
  color2: 'rgba(227, 123, 124, 0.25)',
  color3: 'rgba(255, 228, 180, 0.25)'
}

export function overlayGradient(options:overlayGradientOptions){
  /*const grany = (options.grainyFactor ? options.grainyFactor:1)*128
  const color1 =  options.color1? options.color1:'rgba(114, 97, 147, 0.25)';
  const color2 =  options.color2? options.color2:'rgba(227, 123, 124, 0.25)';
  const color3 =  options.color1? options.color1:'rgba(255, 228, 180, 0.25)'*/
  options = {...defaultValue,...options}
  const grainy = (options.grainyFactor ? options.grainyFactor:1)*128


  return css`
    &:after{
      background-image: url(public/overlay.png), linear-gradient(45deg, ${options.color1} 25%, ${options.color2} 50%, ${options.color3});
      background-size: ${grainy}px ${grainy}px, auto;
      pointer-events: none;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      z-index: 1;
    }
  `
}