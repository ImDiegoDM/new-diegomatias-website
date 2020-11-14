import * as React from 'react'
import { ProjectImageContainer } from './Projects/ProjectImageContainer'
import { GalleryImg } from './Projects/GalleryImg'
import styled from 'styled-components'
import { tablet } from '@/utils'

interface ArticleImageProps{
  width:string;
  height:string;
  title: string;
  src:string;
  className?:string;
  target?:string;
  href?:string;
  onClick: () => void;
}

const Title = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  ${tablet`
    transition: all 500ms;
    opacity: 0;
    ${ProjectImageContainer}:hover & {
      opacity: 1;
    }
  `}
`

export function ArticleImage(props:ArticleImageProps){
  return <ProjectImageContainer 
    className={props.className} 
    width={props.width} 
    height={props.height}
    as="a"
    href={props.href} target="_blank"
  >
    <GalleryImg url={props.src}/>
    <Title>{props.title}</Title>
  </ProjectImageContainer>
}