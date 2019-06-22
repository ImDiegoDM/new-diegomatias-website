import * as React from 'react';
import styled, { css } from "styled-components";
import { BaseSection } from "./BaseSection";

export interface GradientSectionOptions{
  color1?:string;
  color2?:string;
  color3?:string;
  position1?:string;
  position2?:string;
  position3?:string;
  deg?:string;
  grainyFactor?:number;
  className?:string;
}

interface GradientSectionProps{
  children?: React.ReactNode;
  as?:any;
  width?:string;
}

const defaultValue = {
  color1: '#726193',
  color2: '#e37b7c',
  color3: '#ffe4b4',
  position1: '20%',
  position2: '60%',
  position3: '',
  deg: '45deg',
  grainyFactor: 1,
}

export function GradientSection(props:GradientSectionProps & GradientSectionOptions){
  console.log(props)
  props = {...defaultValue,...props}
  const grainy = props.grainyFactor*128;
  const Base = styled(BaseSection)`
    background-image: url(public/overlay.png),linear-gradient(${props.deg}, ${props.color1} ${props.position1}, ${props.color2} ${props.position2}, ${props.color3} ${props.position3});
    background-size: ${grainy}px ${grainy}px, auto;
  `;
  return <Base className={props.className} as={props.as} width={props.width}>
    {props.children}
  </Base>
}