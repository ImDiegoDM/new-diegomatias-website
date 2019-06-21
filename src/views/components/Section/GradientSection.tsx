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

export function GradientSection({
  color1 = '#726193',
  color2 = '#e37b7c',
  color3 = '#ffe4b4',
  position1 = '20%',
  position2 = '60%',
  position3 = '',
  deg = '45deg',
  grainyFactor = 1,
  width,
  children,
  as,
  className
}:GradientSectionProps & GradientSectionOptions){
  const grainy = grainyFactor*128;
  const Base = styled(BaseSection)`
    background-image: url(public/overlay.png),linear-gradient(${deg}, ${color1} ${position1}, ${color2} ${position2}, ${color3} ${position3});
    background-size: ${grainy}px ${grainy}px, auto;
  `;
  return <Base className={className} as={as} width={width}>
    {children}
  </Base>
}