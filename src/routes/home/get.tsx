import { Request,Response } from 'express'
import { componentToString } from '../../render';
import * as React from 'react';
import { Home } from '../../views/pages';
import { getIntroduction,getAbout } from '../../model'

function Introduction(req:Request){
  const lang=req.query.lang ? req.query.lang:"pt-br"

  return getIntroduction()[lang] ? getIntroduction()[lang] : getIntroduction()["pt-br"] ;
}

function About(req:Request){
  const lang=req.query.lang ? req.query.lang:"pt-br"

  return getAbout()[lang] ? getAbout()[lang] : getAbout()["pt-br"] ;
}

export function Get(req:Request,res:Response){
  const introduction = Introduction(req);
  const about = About(req);

  const html = componentToString(<Home about={about} introduction={introduction}/>,{
    title:'Diego Matias de Oliveira',
    description:'Website portifolio de Diego Matias'
  })

  res.send(html);
}