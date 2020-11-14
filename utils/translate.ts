import * as fs from 'fs';
import { MultiLang } from '../interfaces';
import translateObj from '@/translate'

export function configTFunc(lang:string){
  return (key:string,defaultValue:string)=>{
    if(!translateObj[lang]){
      return defaultValue;
    }
    return translateObj[lang][key] || defaultValue;
  }
}

export function configTObject(lang:string){
  return function TranslateObject<T=any>(object:MultiLang<T>){
    if(object[lang]){
      return object[lang]
    }

    return object["pt"]
  }
}