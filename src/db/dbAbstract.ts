import * as fs from 'fs';
import * as path from 'path'

export function getJson(){
  return JSON.parse(fs.readFileSync('jsonDB.json', 'utf8'));
}