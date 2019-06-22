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
  box-shadow: 0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575);
  ${tablet`
    animation: ${show} 1.5s forwards ease-in-out;
    height: 32rem;
    flex-direction: row;
  `}
`;
