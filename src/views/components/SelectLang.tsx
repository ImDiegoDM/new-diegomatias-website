import * as React from 'react'
import styled from 'styled-components';
import { BR } from './SVGFlags/br';

const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  color: #705f8e;

  & a{
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
`;

export function SelectLang(){
  return <Container>
    <a href="?lang=pt">Protuguês</a>&nbsp;|&nbsp;
    <a href="?lang=en">English</a>
  </Container>
}