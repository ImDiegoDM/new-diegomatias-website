import * as React from 'react'
import styled from 'styled-components';
import { tablet } from '../utils';
import { langs } from '@/db'

const Container = styled.div`
  color: #705f8e;
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
    {langs.map((i,index) => <span key={index}>
      <a href={`?lang=${i.key}`}>{i.label}</a>
      {(index !== (langs.length -1)) && <>&nbsp;|&nbsp;</>}
    </span>)}
  </Container>
}