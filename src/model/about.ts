import { getJson } from '../db'
import { About, MultiLang } from '../interfaces'

export function getAbout():MultiLang<About>{
  return getJson().about
}