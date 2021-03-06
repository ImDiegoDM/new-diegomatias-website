import { Project } from '../../interfaces';
import styled from 'styled-components';
import { overlayGradient, tablet, mobileL } from '../../utils';
import { GalleryImg } from './GalleryImg';
import { GroupContainer } from './GroupContainer';
import * as React from 'react';

export interface Group4 {
  p1: Project;
  p2: Project;
  p3: Project;
  p4: Project;
  onSelectProject: (project: Project) => void
}
const Group4BaseImg = styled.div`
  position: relative;
  transition: all 500ms;
  overflow: hidden;
  cursor:pointer;
  ${overlayGradient()}

  &:after{
    transition: all 500ms;
  }

  &:hover{
    &:after{
      opacity:0;
    }
  }
`;
const Group4BigImg = styled(Group4BaseImg)`
  width:100%;
  height: calc( 100% / 3 );
  ${tablet`
    width:70%;
    height: 50%;
  `}
`;
const Group4SmallImg = styled(Group4BaseImg)`
  height: calc( 100% / 3 );
  width:100%;
  ${mobileL`
    width:50%;
  `}

  ${tablet`
    width:30%;
    height: 50%;
  `}
`;
export function Group4(props: Group4) {
  return <GroupContainer width="50rem">
    <Group4BigImg onMouseUp={() => props.onSelectProject(props.p1)}>
      <GalleryImg url={props.p1.img1} />
    </Group4BigImg>
    <Group4SmallImg onMouseUp={() => props.onSelectProject(props.p2)}>
      <GalleryImg url={props.p2.img1} />
    </Group4SmallImg>
    <Group4SmallImg onMouseUp={() => props.onSelectProject(props.p3)}>
      <GalleryImg url={props.p3.img1} />
    </Group4SmallImg>
    <Group4BigImg onMouseUp={() => props.onSelectProject(props.p4)}>
      <GalleryImg url={props.p4.img1} />
    </Group4BigImg>
  </GroupContainer>;
}
