import {css, CSSObject,SimpleInterpolation} from "styled-components";

export function breakPoint(breakPoint:string){
  return (first: CSSObject | TemplateStringsArray, ...interpolations: any[])=>css`
    @media (min-width: ${breakPoint}){
      ${css(first,...interpolations)}
    }
  `
}
