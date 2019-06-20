import styled from 'styled-components';
import { tablet,desktop } from '../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet`
    height: 32rem;
    flex-direction: row;
  `}
`;
