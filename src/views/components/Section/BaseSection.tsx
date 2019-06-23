import styled from 'styled-components';
import { tablet } from '../../utils';
export const BaseSection = styled.section<{
  width?: string;
  zIndex?: number;
}> `
  padding: 2.8875rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props=>props.zIndex? `z-index:${props.zIndex}`:''}
  ${tablet`
    padding: 3.5rem;
    width: ${({ width }) => width ? width : '37.5rem'};
  `}
`;
