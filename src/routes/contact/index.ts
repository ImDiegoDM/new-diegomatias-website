import { Express } from 'express'
import { Post } from './post';

const route='/contact'

export default function (app: Express){
  app.post(route,Post);
}