import * as React from 'react'
import styled from 'styled-components';
import { FlexBox } from './FlexBox';

const CircleContainer = styled(FlexBox)<{size:string,marginLeft:string,marginTop:string}>`
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid rgba(255, 255, 255, 0.25);
  width: ${({size})=>size};
  height: ${({size})=>size};
  margin: ${props=>`${props.marginTop} 0 0 ${props.marginLeft}`};
  position: relative;
  &:before{
    content: '';
    display: block;
    position: absolute;
    width: ${props=>props.marginLeft};
    height: 2px;
    top: 50%;
    left: calc( ( ${props=>props.marginLeft} + 2px ) * -1 );
    background-color: rgba(255, 255, 255, 0.25);
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    height: ${props=>props.marginTop};
    width: 2px;
    left: 50%;
    top: calc( ( ${props=>props.marginTop} + 2px ) * -1 );
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const Ul = styled.ul<{size:string}>`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width:${(props)=>props.size};
  & > li{
    list-style-type: none;
  }
`;

interface BrandGridProps{
  children?:JSX.Element[];
  cellSize?:string;
  margin?:string;
  columns?:number;
}

export function BrandGrid(props:BrandGridProps){
  const cellsize = props.cellSize || '5rem';
  const columns = props.columns || 3;
  const margin = props.margin || '2rem';

  return <Ul size={`calc( ( ${cellsize} * ${columns} ) + ( ${margin} * ${columns-1}  ) )`}>{
    props.children.map((element,i)=>(
      <li>
        <CircleContainer 
          as="span" 
          alignItems="center" 
          marginLeft={i % columns == 0 ? '0':margin}
          marginTop={i > (columns-1) ? margin:'0'}
          justifyContent="center" 
          size={cellsize}>
          {element}
        </CircleContainer>
      </li>
    ))
  }</Ul>
}