import styled from "styled-components";

export const Basis = styled.div<{basis:string}>`
  flex-basis: ${({basis})=>basis}
`;