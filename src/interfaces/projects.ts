import { MultiLang } from ".";

export interface ProjectsText{
  title:string;
  description:string;
}

export interface Project{
  id:string;
  name:string;
  description:MultiLang<string>;
  img1?:string;
  img2?:string;
  img3?:string;
  img4?:string;
}