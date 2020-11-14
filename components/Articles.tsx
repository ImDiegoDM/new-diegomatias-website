import { Section, SectionType } from "./Section";
import React from "react";
import { MultilangContext, PostsContext } from "@/contexts";
import { articles } from '@/db'
import { GroupContainer } from "./Projects/GroupContainer";
import { ProjectImage } from ".";
import { ArticleImage } from "./ArticleImage";

const reg = new RegExp('.*<figure><img.*src="(.*)".* \/>.*', 'g')

function getImg(html:string) {
  return html.replace(reg, '$1')
}

export function Articles(){
  const {translateObject} = React.useContext(MultilangContext)
  const { posts } = React.useContext(PostsContext)
  return <>
  <Section type={SectionType.gradient} width="20rem" gradientOptions={{
    color1:'#ce6b6b',
    color2:'#dc6e6f',
    color3:'#e48b68'
  }}>
    <h2>{translateObject(articles).title}</h2>
    <p>{translateObject(articles).description}</p>
  </Section>
  {posts && posts.map((p,index) => <GroupContainer key={index} width="25rem">
    <ArticleImage 
      onClick={()=>{}} 
      width="100%" 
      height="50%" 
      src={getImg(p['content:encoded'])} 
      title={p.title}
      href={p.link}
    />
    <ArticleImage 
      onClick={()=>{}} 
      width="100%" 
      height="50%" 
      src={getImg(p['content:encoded'])} 
      title={p.title}
      href={p.link}
    />
  </GroupContainer>)}
  </>
}