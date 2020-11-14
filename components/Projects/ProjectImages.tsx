import * as React from 'react'
import { Project } from '@/interfaces';
import styled, { keyframes,css } from 'styled-components';
import { FlexBox } from '../FlexBox';
import { tablet } from '@/utils';

interface ProjectImagesProps{
  project:Project;
}

const Img = styled.img`
  width:100%;
  ${tablet`
    //max-width:50vmax;
    max-height: 80vmin;
    max-width: 50vw;
    width: auto;
  `}
`;

const ChoseImg = styled.div<{
  url: string;
}> `
  cursor: pointer;
  width: 100%;
  height:100%;
  background-image: url(${({ url }) => url});
  background-size:cover;
  background-position: center;
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

interface ProjectVideoProps{
  videoURL:string;
}

const IFrame = styled.iframe`
  width: 100%;
  height:100%;
`;

<iframe width="560" height="315" ></iframe>

export function ProjectVideo(props:ProjectVideoProps){
  return <FlexBox style={{ width: '90vmin',height: '60vmin'}} animation={css`${show} 1s forwards ease-in-out`} directiom="column">
    <IFrame
      src={props.videoURL} >
      </IFrame>
  </FlexBox>
}

export function ProjectImages(props:ProjectImagesProps){
  return <FlexBox animation={css`${show} 1s forwards ease-in-out`} directiom="column">
    <FlexBox>
      <div>
        <Img data-type="project-description-preview" data-project={props.project.id} src={props.project.img1} />
      </div>
    </FlexBox>
    <FlexBox width="100%" height="100px">
        {props.project.img1 && <ChoseImg 
          data-type="project-description-select-image" 
          data-project={props.project.id} 
          data-url={props.project.img1} 
          url={props.project.img1} 
        />}
        {props.project.img2 && <ChoseImg 
          data-type="project-description-select-image" 
          data-project={props.project.id} 
          data-url={props.project.img2} 
          url={props.project.img2} 
        />}
        {props.project.img3 && <ChoseImg 
          data-type="project-description-select-image" 
          data-project={props.project.id} 
          data-url={props.project.img3} 
          url={props.project.img3} 
        />}
        {props.project.img4 && <ChoseImg 
          data-type="project-description-select-image" 
          data-project={props.project.id} 
          data-url={props.project.img4} 
          url={props.project.img4} 
        />}
    </FlexBox>
  </FlexBox>
}