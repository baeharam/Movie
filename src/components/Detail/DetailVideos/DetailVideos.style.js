import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Video = styled.div`
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Play = styled(FaPlay)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
`;

export { Video, Thumbnail, Play };
