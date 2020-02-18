import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Videos = styled.section`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  text-align: center;
  color: ${primaryColor};
`;

const VideoTitle = styled.h2`
  margin-bottom: 1rem;
`;

const VideoIframe = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 100%;
    border: 0;
  }
`;

export { Videos, Container, VideoTitle, VideoIframe };
