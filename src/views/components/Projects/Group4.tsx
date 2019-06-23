import { Project } from '../../../interfaces';
import styled from 'styled-components';
import { overlayGradient, tablet } from '../../utils';
import { Img } from './Img';
import { GroupContainer } from './GroupContainer';
import * as React from 'react';

export interface Group4 {
  p1: Project;
  p2: Project;
  p3: Project;
  p4: Project;
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
  width:50%;
  height: calc( 100% / 3 );
  ${tablet`
    width:30%;
    height: 50%;
  `}
`;
export function Group4(props: Group4) {
  return <GroupContainer width="50rem">
    <Group4BigImg>
      <Img src={props.p1.img1} />
    </Group4BigImg>
    <Group4SmallImg>
      <Img src={props.p2.img1} />
    </Group4SmallImg>
    <Group4SmallImg>
      <Img src={props.p3.img1} />
    </Group4SmallImg>
    <Group4BigImg>
      <Img src={props.p4.img1} />
    </Group4BigImg>
  </GroupContainer>;
}
