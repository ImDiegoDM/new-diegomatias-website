import * as React from 'react'
import { ProjectsText } from '../../interfaces';
import { Section, SectionType } from '.';

interface ProjectsSectionProps{
  projectsText:ProjectsText;
}

export function ProjectsSection({projectsText}:ProjectsSectionProps){
  return <Section type={SectionType.gradient} width="20rem" gradientOptions={{
    color1:'#e37b7c',
    color2:'#dd7475',
    color3:'#eba488'
  }}>
    <h2>{projectsText.title}</h2>
    <p>{projectsText.description}</p>
  </Section>
}