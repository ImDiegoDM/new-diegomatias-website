import styled from 'styled-components';
export const Img = styled.div<{
  src: string;
}> `
  transition: all 500ms;
  width: 100%;
  height:100%;
  background-image: url(${({ src }) => src});
  background-size:cover;

  &:hover{
    transform: scale(1.1);
  }
`;
