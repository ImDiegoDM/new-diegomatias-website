import {css} from 'styled-components';

export function cssImage(url:string){
  return css`
    background-image: url("${url}");
    background-size: cover;
    background-position: center;
  `
}