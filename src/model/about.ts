import { getJson } from '../db'
import { About } from '../interfaces'

export function getAbout():About{
  return getJson().about
}