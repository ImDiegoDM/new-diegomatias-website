import { Request,Response } from 'express'
import { componentToString } from '../../render';
import * as React from 'react';
import { Home } from '../../views/pages';

export function Get(req:Request,res:Response){
  const html = componentToString(<Home/>,{
    title:'Diego Matias de Oliveira',
    description:'Website portifolio de Diego Matias'
  })

  res.send(html);
}