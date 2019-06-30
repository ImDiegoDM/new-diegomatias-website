import * as React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { Project } from '../../../interfaces';
import { FlexBox } from '../FlexBox';
import { ProjectImages } from './ProjectImages';
import { MultilangContext } from '../MultiLangPage';
import { tablet } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const BG = styled(FlexBox)`
  
`;

interface ProjectDescriptionProps{
  project:Project;
}

const ProjectDescriptionContainer = styled.div`
  position:fixed;
  background-color: rgba(46, 43, 55, 0.875);
  width:100%;
  height:100%;
  top:0;
  z-index: 10;
  padding: 15px;
  overflow-Y: auto;
  align-items: center;
  justify-content: center;
  ${tablet`
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
  
  return <ProjectDescriptionContainer data-type="project-description" data-target={props.project.id} style={{display:'none'}}>
    <ExitIcon data-type="project-description-exit" data-target={props.project.id} icon={faTimes} size="2x"/>
    <FlexBox animation={css`${show} 1s forwards ease-in-out`} width="100%" padding="10px" directiom="column" basis="50%">
      <h2>{props.project.name}</h2>
      <p>{translateObject(props.project.description)}</p>
    </FlexBox>
    <ProjectImages project={props.project}/>
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