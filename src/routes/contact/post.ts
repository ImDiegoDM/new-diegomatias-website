import { Request,Response } from 'express'
import * as nodemailer from 'nodemailer';

let transporter;

function validateMessage(body:any){
  if(!body.email){
    return false;
  }
  if(body.email == ''){
    return false;
  }

  if(!body.name){
    return false;
  }
  if(body.name == ''){
    return false;
  }

  if(!body.message){
    return false;
  }
  if(body.message == ''){
    return false;
  }

  return true;
}

export async function Post(req:Request,res:Response){
  if(!transporter){
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASSWORD // generated ethereal password
      }
    });
  }

  if(!validateMessage(req.body)){
    res.status(422).send('Please inform: message, name and email correctly')
  }
  try {
    await transporter.sendMail({
      from: '"Website" <contato@diegomatias.dev>',
      to: "contato@diegomatias.dev",
      subject: "Contato apartir do site",
      text: `
        email: ${req.body.email}
        nome: ${req.body.name}
        message: ${req.body.message}
      `
    })  
  } catch (error) {
    console.log(error)
    res.status(500).send('error sending message')
    return;
  }
  

  res.send('message sended')
}