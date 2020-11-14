import {css, CSSObject} from "styled-components";
import { breakPoint } from './'

export function mobileS(first: CSSObject | TemplateStringsArray, ...interpolations: any[]){
  return breakPoint('300px')(first,...interpolations)
}