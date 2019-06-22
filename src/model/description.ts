import { getJson } from '../db'
import { Introduction, MultiLang } from '../interfaces'

export function getIntroduction():MultiLang<Introduction>{
  return getJson().introduction
}