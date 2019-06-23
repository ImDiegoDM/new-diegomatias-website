import * as fs from 'fs';

const translateObj = JSON.parse(fs.readFileSync('translate.json', 'utf8'));

export function configTFunc(lang:string){
  return (key:string,defaultValue:string)=>{
    if(!translateObj[lang]){
      return defaultValue;
    }
    return translateObj[lang][key] || defaultValue;
  }
}