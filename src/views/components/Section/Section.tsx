import * as React from 'react';
import { GradientSectionOptions,GradientSection } from './GradientSection'
import { BGSection } from './BGSection';
import { ImageSection, ImageSectionOptions } from './ImageSection';

export enum SectionType{
  normal = 'normal',
  gradient = 'gradient',
  image = 'image'
}

export interface SectionProps{
  bg?: string;
  type?: SectionType;
  gradientOptions?:GradientSectionOptions;
  imageOptions?:ImageSectionOptions;
  children?: React.ReactNode;
  as?:any;
  width?:string;
  className?:string;
}

const defaultSection:SectionProps = {
  type:SectionType.normal,
  bg:'red'
}

export function Section(props = defaultSection){
  switch (props.type) {
    case SectionType.image:
      return <ImageSection width={props.width} {...props.imageOptions}>{props.children}</ImageSection>
    case SectionType.gradient:
      return <GradientSection className={props.className} as={props.as} width={props.width} {...props.gradientOptions}>{props.children}</GradientSection>
    case SectionType.normal:
    default:
      return <BGSection className={props.className} as={props.as} width={props.width} color={props.bg}>{props.children}</BGSection>
  }
}
