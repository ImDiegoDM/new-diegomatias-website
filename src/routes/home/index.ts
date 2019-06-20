import { Express } from 'express'
import { Get } from './get';

const route='/'

export default function (app: Express){
  app.get(route,Get);
}