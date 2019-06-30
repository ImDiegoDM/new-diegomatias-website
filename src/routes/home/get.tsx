import { Request,Response } from 'express'
import { componentToString } from '../../render';
import * as React from 'react';
import { Home } from '../../views/pages';
import { getIntroduction,getAbout, getKnowledge, getContact } from '../../model'
import { Introduction, MultiLang, Project, ProjectsText as IProjectsText } from '../../interfaces';
import { getProjects } from '../../model/projects';
import { MultiLangPage } from '../../views/components/MultiLangPage';

function getMultiLang<T = any>(req:Request,resorce:MultiLang<T>):T{
  const lang=req.query.lang ? req.query.lang:"pt-br"

  return resorce[lang] ? resorce[lang] : resorce["pt-br"] ;
}

function Introduction(req:Request){
  return getMultiLang(req,getIntroduction());
}

function About(req:Request){
  return getMultiLang(req,getAbout());
}

function Knowledge(req:Request){
  return getMultiLang(req,getKnowledge());
}

function ProjectsText(req:Request):[IProjectsText,Project[]]{
  const p = getProjects();
  return [getMultiLang(req,p.texts),p.projects];
}

function Contact(req:Request){
  return getMultiLang(req,getContact());
}

export function Get(req:Request,res:Response){
  const lang=req.query.lang ? req.query.lang:"pt-br"

  const introduction = Introduction(req);
  const about = About(req);
  const knowledge = Knowledge(req);
  const [projectsText,projects] = ProjectsText(req);
  const contact = Contact(req);

  const html = componentToString(<MultiLangPage lang={lang}>
      <Home 
      contact={contact}
      projectsText={projectsText} 
      projects={projects}
      about={about} 
      knowledge={knowledge} 
      introduction={introduction}/>
    </MultiLangPage>
    ,{
    title:'Diego Matias de Oliveira',
    description:'Website portifolio de Diego Matias'
  },['https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js','public/js/home.js'])

  res.send(html);
}