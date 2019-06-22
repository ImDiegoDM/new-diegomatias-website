import styled, { keyframes } from 'styled-components';
import { tablet,desktop } from '../utils'

const show = keyframes`
  from{
    opacity:0;
    transform: translateX(50px);
  }
  to{
    opacity:1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet`
    animation: ${show} 1.5s forwards ease-in-out;
    height: 32rem;
    flex-direction: row;
  `}
`;
