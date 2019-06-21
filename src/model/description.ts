import { getJson } from '../db'
import { Introduction } from '../interfaces'

export function getIntroduction():Introduction{
  return getJson().introduction
}