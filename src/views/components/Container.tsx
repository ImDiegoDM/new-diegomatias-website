import styled from 'styled-components';
import { tablet } from '../utils';


export const Container = styled.div`
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  
  ${tablet`
    height: 100%;
    padding: 57px;
  `}
`;
