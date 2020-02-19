import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Gallery = styled.section`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  text-align: center;
  color: ${primaryColor};
`;

const GalleryTitle = styled.h2`
  margin-bottom: 1rem;
`;

export { Gallery, Container, GalleryTitle };
