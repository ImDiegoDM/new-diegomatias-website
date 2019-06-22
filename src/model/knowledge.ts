import { getJson } from '../db'
import { Knowledge, MultiLang } from '../interfaces'

export function getKnowledge():MultiLang<Knowledge>{
  return getJson().knowledge
}