import { Express } from 'express'
import home from './home'
import contact from './contact'

export default function (app: Express){
  home(app);
  contact(app);
}