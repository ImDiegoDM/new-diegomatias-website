import { Request,Response } from 'express'
import { componentToString } from '../../render';
import * as React from 'react';
import { Home } from '../../views/pages';
import { getIntroduction,getAbout, getKnowledge } from '../../model'
import { Introduction, MultiLang } from '../../interfaces';

function getMultiLang<T = any>(req:Request,getFunction:()=>MultiLang<T>):T{
  const lang=req.query.lang ? req.query.lang:"pt-br"

  return getFunction()[lang] ? getFunction()[lang] : getFunction()["pt-br"] ;
}

function Introduction(req:Request){
  return getMultiLang(req,getIntroduction);
}

function About(req:Request){
  return getMultiLang(req,getAbout);
}

function Knowledge(req:Request){
  return getMultiLang(req,getKnowledge);
}

export function Get(req:Request,res:Response){
  const introduction = Introduction(req);
  const about = About(req);
  const knowledge = Knowledge(req);

  const html = componentToString(<Home about={about} knowledge={knowledge} introduction={introduction}/>,{
    title:'Diego Matias de Oliveira',
    description:'Website portifolio de Diego Matias'
  })

  res.send(html);
}