import styled from 'styled-components';
import { overlayGradient } from '../../utils';
interface ProjectImageContainerProps {
  width: string;
  height: string;
}
export const ProjectImageContainer = styled.div<ProjectImageContainerProps> `
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
