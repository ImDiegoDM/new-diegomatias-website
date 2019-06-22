import styled from "styled-components";

export const FlexBasis = styled.div<{basis:string}>`
  flex-basis: ${({basis})=>basis}
`;