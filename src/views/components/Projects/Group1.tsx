import * as React from "react";
import { Project } from "../../../interfaces";
import { GroupContainer } from "./GroupContainer";
import { ProjectImage } from "..";

interface Group1Props{
  project:Project;
}

export function Group1(props: Group1Props) {
  return <GroupContainer width="25rem" mobileHegith="30rem">
    <ProjectImage width="100%" target={props.project.id} height="100%" src={props.project.img1} />
  </GroupContainer>;
}