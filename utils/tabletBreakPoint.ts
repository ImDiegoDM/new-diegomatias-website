import {css, CSSObject} from "styled-components";
import { breakPoint } from './'

export function tablet(first: CSSObject | TemplateStringsArray, ...interpolations: any[]){
  return breakPoint('737px')(first,...interpolations)
}
