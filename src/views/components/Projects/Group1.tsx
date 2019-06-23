import * as React from "react";
import { Project } from "../../../interfaces";
import { GroupContainer } from "./GroupContainer";
import { ProjectImage } from "..";

interface Group1Props{
  project:Project;
}

export function Group1(props: Group1Props) {
  return <GroupContainer width="25rem">
    <ProjectImage width="100%" height="100%" src={props.project.img1} />
  </GroupContainer>;
}