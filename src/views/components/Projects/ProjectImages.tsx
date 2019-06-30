import * as React from 'react'
import { Project } from '../../../interfaces';
import styled, { keyframes,css } from 'styled-components';
import { FlexBox } from '../FlexBox';
import { GalleryImg } from './GalleryImg';
import { tablet } from '../../utils';

interface ProjectImagesProps{
  project:Project;
}

const Container = styled.div`
  
`;

const Img = styled.img`
  width:100%;
  ${tablet`
    width:50vmax;
  `}
`;

const ChoseImg = styled.div<{
  url: string;
}> `
  width: 100%;
  height:100%;
  background-image: url(${({ url }) => url});
  background-size:cover;
  margin-left: 5px;
  &:first-child{
    margin-left:0;
  }
`
const show = keyframes`
  from{
    opacity:0;
    transform: translateY(20px);
  }
  to{
    opacity:1;
  }
`;

export function ProjectImages(props:ProjectImagesProps){
  return <FlexBox animation={css`${show} 1s forwards ease-in-out`} directiom="column">
    <FlexBox>
      <div>
        <Img src={props.project.img1} />
      </div>
    </FlexBox>
    <FlexBox width="100%" height="100px">
        <ChoseImg url={props.project.img1} />
        <ChoseImg url={props.project.img2} />
        <ChoseImg url={props.project.img3} />
        <ChoseImg url={props.project.img4} />
    </FlexBox>
  </FlexBox>
}