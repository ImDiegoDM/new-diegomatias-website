import styled from 'styled-components';
import { tablet } from '../utils';
import { mobileL } from '../utils';


export const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;

  ${mobileL`
    padding: 1rem;
  `}
  
  ${tablet`
    height: 100%;
    padding: 57px;
  `}
`;
