import { Request,Response } from 'express'

export function Get(req:Request,res:Response){
  res.send("Hello World");
}