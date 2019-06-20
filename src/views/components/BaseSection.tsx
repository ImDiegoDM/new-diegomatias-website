import styled from 'styled-components';
import { tablet } from '../utils';
export const BaseSection = styled.section<{
  width?: string;
}> `
  width: 100%;
  padding: 2.8875rem 1.75rem 1.3875rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${tablet`
    padding: 3.5rem 3.5rem 2rem 3.5rem;
    width: ${({ width }) => width ? width : '37.5rem'};
  `}
`;
