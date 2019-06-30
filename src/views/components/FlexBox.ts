import styled from 'styled-components';

type AlignItems = 'stretch'|'center'|'flex-start'|'flex-end'|'baseline'|'initial'|'inherit';

type AlignContet = 'stretch'|'center'|'flex-start'|'flex-end'|'space-between'|'space-around'|'initial'|'inherit';

type FlexDirecton =  'row'|'row-reverse'|'column'|'column-reverse'|'initial'|'inherit';

type JustifyContent =  'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'initial'|'inherit';

type FlexWrap = 'nowrap'|'wrap'|'wrap-reverse'|'initial'|'inherit';

export interface FlexBoxProps {
  alignItems?: AlignItems;
  alignContent?: AlignContet;
  directiom?: FlexDirecton;
  justifyContent?: JustifyContent;
  height?: string;
  width?: string;
  basis?:string;
  wrap?: FlexWrap;
  margin?: string;
  padding?: string;
  animation?: any;
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'stretch'}
  align-content: ${(props) => props.alignContent || 'stretch'}
  justify-content: ${(props) => props.justifyContent || 'flex-start'}
  flex-direction: ${(props) => props.directiom || 'row'}
  height: ${(props) => props.height || 'auto'}
  width: ${(props) => props.width || 'auto'}
  flex-basis: ${({basis}) => basis || 'auto'}
  flex-wrap: ${({wrap}) => wrap || 'nowrap'}
  margin: ${({margin}) => margin || '0'}
  padding: ${({padding}) => padding || '0'}
  animation: ${({animation}) => animation || 'none 0 ease 0 1 normal none running'}
`;
