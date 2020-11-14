import styled from 'styled-components';
import { overlayGradient, mobileL } from '../../utils';
interface ProjectImageContainerProps {
  width: string;
  height: string;
  href?:string;
  target?: string;
}
export const ProjectImageContainer = styled.div<ProjectImageContainerProps> `
  position: relative;
  transition: all 500ms;
  overflow: hidden;
  cursor:pointer;
  width:100%;
  ${overlayGradient()}

  &:after{
    transition: all 500ms;
  }

  &:hover{
    &:after{
      opacity:0;
    }
  }

  ${mobileL`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `}
`;
