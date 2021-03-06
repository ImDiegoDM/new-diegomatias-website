import { Project } from '../../interfaces';
import { GroupContainer } from './GroupContainer';
import { ProjectImage } from './Projects';
import * as React from 'react';

interface Group3 {
  p1: Project;
  p2: Project;
  p3: Project;
  onSelectProject: (project: Project) => void
}
export function Group3T1(props: Group3) {
  return <GroupContainer width="30rem">
    <ProjectImage onClick={()=>props.onSelectProject(props.p1)} width="100%" target={props.p1.id} height="50%" src={props.p1.img1} />
    <ProjectImage onClick={()=>props.onSelectProject(props.p2)} width="50%" target={props.p2.id} height="50%" src={props.p2.img1} />
    <ProjectImage onClick={()=>props.onSelectProject(props.p3)} width="50%" target={props.p3.id} height="50%" src={props.p3.img1} />
  </GroupContainer>;
}
export function Group3T2(props: Group3) {
  return <GroupContainer width="30rem">
    <ProjectImage onClick={()=>props.onSelectProject(props.p2)} width="50%" target={props.p2.id} height="50%" src={props.p2.img1} />
    <ProjectImage onClick={()=>props.onSelectProject(props.p3)} width="50%" target={props.p3.id} height="50%" src={props.p3.img1} />
    <ProjectImage onClick={()=>props.onSelectProject(props.p1)} width="100%" target={props.p1.id} height="50%" src={props.p1.img1} />
  </GroupContainer>;
}
