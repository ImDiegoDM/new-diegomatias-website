import * as React from 'react';
import styled from 'styled-components';
import { BaseSection } from './BaseSection';
import { cssImage, overlayGradient, tablet } from '../../utils';

export interface ImageSectionOptions{
  imageUrl?: string;
  overlay?:boolean;
  imageWidth?:string;
  flexEnd?:boolean;
  color1?:string;
  color2?:string;
  color3?:string;
}

const Base = styled.section <ImageSectionOptions> `
  position:relative;
  display:flex;
  ${tablet`
    ${props=>props.imageWidth? `width: ${props.imageWidth};` : ''}
    ${props=>props.flexEnd? `justify-content: flex-end;` : 'justify-content: flex-start;'}
  `}
  ${props=>props.imageUrl? cssImage(props.imageUrl) : ''}
  ${props=> props.overlay? overlayGradient({
    color1:props.color1,
    color2:props.color2,
    color3:props.color3
  }):'' }
`;

type ImageSectionProps = ImageSectionOptions & {
  width?:string;
  children?:React.ReactNode
}

export function ImageSection(props:ImageSectionProps){
  return <Base {...props}>
    <BaseSection zIndex={10} as="div" width={props.width}>
      {props.children}
    </BaseSection>
  </Base>
}