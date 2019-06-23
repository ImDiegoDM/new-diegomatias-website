import * as fs from 'fs';

export function getJson(){
  return JSON.parse(fs.readFileSync('jsonDB.json', 'utf8'));
}