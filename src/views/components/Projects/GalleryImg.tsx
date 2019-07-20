import styled from 'styled-components';
export const GalleryImg = styled.div<{
  url: string;
}> `
  transition: all 500ms;
  width: 100%;
  height:100%;
  background-image: url(${({ url: src }) => src});
  background-size:cover;
  background-position: center;

  &:hover{
    transform: scale(1.1);
  }
`;
