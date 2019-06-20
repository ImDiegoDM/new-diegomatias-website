import * as React from 'react';
import styled from 'styled-components';
import { BaseSection } from './BaseSection';
import { GradientSectionOptions,GradientSection } from './GradientSection'

const BGSection = styled(BaseSection)<{
  color: string;
}> `
  background-color: ${({ color }) => color};
`;

export enum SectionType{
  normal = 'normal',
  gradient = 'gradient'
}

export interface SectionProps{
  bg?: string;
  type?: SectionType;
  gradientOptions?:GradientSectionOptions;
  children?: React.ReactNode;
  as?:any;
  width?:string;
}

const defaultSection:SectionProps = {
  type:SectionType.normal,
  bg:'red'
}

export function Section(props = defaultSection){
  switch (props.type) {
    case SectionType.gradient:
      return <GradientSection as={props.as} width={props.width} {...props.gradientOptions}>{props.children}</GradientSection>
    case SectionType.normal:
    default:
      return <BGSection as={props.as} width={props.width} color={props.bg}>{props.children}</BGSection>
  }
}
