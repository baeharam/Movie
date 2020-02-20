import styled from 'styled-components';
import { primaryColor, device } from 'styles/variables';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const Background = styled.section`
  position: relative;
  z-index: -1;
  background: url(${({ backdropPath }) => backdropPath}) no-repeat center;
  background-size: cover;
  height: 40vh;
  filter: grayscale(100%);

  @media ${device.Laptops} {
    height: 60vh;
  }
`;

const Poster = styled.img`
  display: block;
  width: 50vw;
  margin-top: -150px;
  box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.5);

  @media ${device.TabletPortrait} {
    width: 30vw;
  }
`;

const Year = styled.span`
  font-size: 1.2rem;

  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2rem 0;

  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 2px solid ${primaryColor};
  opacity: 0.5;
  margin: 2rem 0;
`;

const OverviewTitle = styled.h2`
  margin-bottom: 1rem;
`;

const OverviewContent = styled.div`
  line-height: 1.5;
`;

const Like = styled.button`
  display: flex;
  justify-content: space-around;
  background-color: ${primaryColor};
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  span {
    margin-right: 1rem;
  }
`;

const LikeIcon = styled(AiFillLike)`
  color: white;
`;

const DislikeIcon = styled(AiFillDislike)`
  color: white;
`;

export {
  Background,
  Poster,
  Year,
  Info,
  Divider,
  OverviewTitle,
  OverviewContent,
  Like,
  LikeIcon,
  DislikeIcon,
};
