import styled from 'styled-components';
import { BaseSection } from './BaseSection';

export const BGSection = styled(BaseSection) <{
  color: string;
}> `
  background-color: ${({ color }) => color};
`;
