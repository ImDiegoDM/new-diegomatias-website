import {css, CSSObject} from "styled-components";
import { breakPoint } from './'

export function mobileL(first: CSSObject | TemplateStringsArray, ...interpolations: any[]){
  return breakPoint('425px')(first,...interpolations)
}