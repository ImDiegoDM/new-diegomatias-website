import styled from 'styled-components';
import { tablet } from '../../utils';
export const GroupContainer = styled.div<{
  width: string;
}> `
  display:flex;
  flex-wrap: wrap;
  height: 50rem;
  width: 100%;
  ${tablet`
    height: auto;
    width: ${({ width }) => width ? width : '37.5rem'};
  `}
`;
