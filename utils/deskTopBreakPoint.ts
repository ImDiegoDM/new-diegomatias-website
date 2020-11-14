import {css, CSSObject,SimpleInterpolation} from "styled-components";
import { breakPoint } from '.'

export function desktop(first: CSSObject | TemplateStringsArray, ...interpolations: any[]){
  return breakPoint('1025px')(first,...interpolations)
}
