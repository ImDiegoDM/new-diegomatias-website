import { getJson } from '../db'
import { MultiLang, Contact } from '../interfaces'

export function getContact():MultiLang<Contact>{
  return getJson().contact
}