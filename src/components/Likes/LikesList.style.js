import styled from 'styled-components';
import { device } from 'styles/variables';
import { Link } from 'react-router-dom';

const Container = styled.div`
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
`;

const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const itemGap = '1rem';
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(50% - ${itemGap});
  font-size: 1rem;
  padding: 1rem ${itemGap};
  margin-left: -${itemGap};

  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
  }

  @media ${device.TabletPortrait} {
    flex-basis: calc(33.33333333333% - ${itemGap});
    font-size: 1.2rem;
  }
  @media ${device.Laptops} {
    flex-basis: calc(25% - ${itemGap});
    font-size: 1.5rem;
  }
`;

const MovieTitle = styled.p`
  margin-bottom: 1rem;
`;

const RemoveButton = styled.button`
  background-color: #c81912;
  width: 120px;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
`;

export { Container, Title, ItemList, Item, ItemLink, MovieTitle, RemoveButton };
