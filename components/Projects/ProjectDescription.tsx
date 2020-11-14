import * as React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { Project } from '../../interfaces';
import { FlexBox } from '../FlexBox';
import { ProjectImages, ProjectVideo } from './ProjectImages';
import { MultilangContext } from '@/contexts';
import { tablet } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BG = styled(FlexBox)`
  
`;

interface ProjectDescriptionProps{
  project:Project;
  onClickExit: () => void
}

const ProjectDescriptionContainer = styled.div`
  background-color: rgba(46, 43, 55, 0.875);
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 15px;
  overflow-Y: auto;
  align-items: center;
  justify-content: center;
  ${tablet`
    overflow:hidden;
    display:flex;
    flex-direction: row-reverse;
  `}
`;

const ExitIcon = styled(FontAwesomeIcon)`
  color: inherit;
  position: absolute;
  top: 15px;
  right: 25px;
  cursor: pointer;
  z-index: 10;
`;

const show = keyframes`
  from{
    opacity:0;
    transform: translateY(-20px);
  }
  to{
    opacity:1;
  }
`;

export function ProjectDescription(props:ProjectDescriptionProps){
  const {translateObject} = React.useContext(MultilangContext)
  
  return <ProjectDescriptionContainer>
    <div onClick={props.onClickExit}>
      <ExitIcon icon={faTimes} size="2x"/>
    </div>
    <FlexBox animation={css`${show} 1s forwards ease-in-out`} width="100%" padding="10px" directiom="column" basis="50%">
      <h2>{props.project.name}</h2>
      <p>{translateObject(props.project.description)}</p>
    </FlexBox>
    {!props.project.videoURL && <ProjectImages project={props.project}/>}
    { props.project.videoURL && <ProjectVideo videoURL={props.project.videoURL}/>}
  </ProjectDescriptionContainer>
}

export interface ProjectsDescriptionsProps{
  projects:Project[]
}

export function ProjectsDescriptions(props:ProjectsDescriptionsProps){
  return <>
    {props.projects.map(project=>(
      <ProjectDescription project={project}/>
    ))}
  </>
}