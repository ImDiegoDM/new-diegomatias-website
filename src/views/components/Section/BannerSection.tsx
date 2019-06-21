import * as React from 'react';
import styled from 'styled-components';
import { Section,SectionProps } from './Section';
import { tablet,breakPoint,cssImage,overlayGradient } from '../../utils';

const bannerBreakPoint = breakPoint('634px');

const BannerContainer = styled(Section)`
  ${bannerBreakPoint`
    flex-basis: 60%;
  `}
  ${tablet`
    flex-basis: auto;
  `}
`;

const BannerWrapper = styled.section`
  display: flex;
  flex-direction:column;
  ${bannerBreakPoint`
    flex-direction:row;
  `}
  ${tablet`
    height: 100%;
  `}
`;

const ImageDiv = styled.div<{url:string}>`
  background-color: black;
  height: 17rem;
  position:relative;
  ${props=>cssImage(props.url)}
  ${overlayGradient({
    grainyFactor:2
  })}
  ${bannerBreakPoint`
    flex-basis: 40%;
    height: auto;
  `}
  ${tablet`
    flex-basis: auto;
    width: 17.5rem;
  `}
`

type BannerSectionProps = SectionProps & {
  imageUrl:string;
};

export function BannerSection(props:BannerSectionProps){
  return <BannerWrapper>
    <ImageDiv url={props.imageUrl}/>
    <BannerContainer {...props}>
      {props.children}
    </BannerContainer>
  </BannerWrapper>
}