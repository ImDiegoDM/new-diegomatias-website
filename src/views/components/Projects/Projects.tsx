import * as React from 'react'
import { Project } from '../../../interfaces';
import { GalleryImg } from './GalleryImg';
import { ProjectImageContainer } from './ProjectImageContainer';
import { Group4 } from './Group4';
import { Group3T1, Group3T2 } from './Group3';
import { Group1 } from './Group1';

interface ProjectsProps{
  projects:Project[]
}

enum ProjectType{
  one,
  three,
  four
}

const typeSequence = [ProjectType.three,ProjectType.one,ProjectType.four,ProjectType.one]

export function Projects(props:ProjectsProps){
  const comps = [];
  let i = props.projects.length;
  let seqIndex = 0;

  while (i>0) {
    const seqToChose = typeSequence[seqIndex]
    if(seqToChose === ProjectType.four && i >= 4){
      comps.push(<Group4 key={i} p1={props.projects[i-1]} p2={props.projects[i-2]} p3={props.projects[i-3]} p4={props.projects[i-4]}/>)
      i-=4;
    } else if(seqToChose === ProjectType.three && i >= 3){
      const group = Math.random() * 2
      if(group == 1){
        comps.push(<Group3T1 key={i} p1={props.projects[i-1]} p2={props.projects[i-2]} p3={props.projects[i-3]}/>)
      }
      else{
        comps.push(<Group3T2 key={i} p1={props.projects[i-1]} p2={props.projects[i-2]} p3={props.projects[i-3]}/>)
      }
      i-=3;
    } else {
      comps.push(<Group1 key={i} project={props.projects[i-1]}/>)
      i-=1;
    }
    seqIndex++;

    if(seqIndex >= typeSequence.length){
      seqIndex=0;
    }
  }

  return <>{comps}</>
}

interface ProjectImageProps{
  width:string;
  height:string;
  src:string;
  className?:string;
  target?:string
}

export function ProjectImage(props:ProjectImageProps){
  return <ProjectImageContainer className={props.className} width={props.width} height={props.height}>
    <GalleryImg data-type="gallery-selector" data-target={props.target} url={props.src}/>
  </ProjectImageContainer>
}

