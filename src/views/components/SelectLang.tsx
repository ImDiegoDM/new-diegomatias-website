import * as React from 'react'
import styled from 'styled-components';
import { tablet } from '../utils';

const Container = styled.div`
  color: #705f8e;
  z-index: 5;
  padding-right: 1rem;

  & a{
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  ${tablet`
    position: fixed;
    top: 10px;
    right: 20px;
    padding-right: 0;
  `}
`;

export function SelectLang(){
  return <Container>
    <a href="?lang=pt">Português</a>&nbsp;|&nbsp;
    <a href="?lang=en">English</a>
  </Container>
}