import { getJson } from '../db'
import { Project,ProjectsText, MultiLang } from '../interfaces'

export function getProjects():{texts:MultiLang<ProjectsText>,projects:Project[]}{
  return getJson().projects
}