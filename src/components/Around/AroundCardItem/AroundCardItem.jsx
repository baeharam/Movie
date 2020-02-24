import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import * as S from './AroundCardItem.style';

const AroundCardItem = ({ movie }) => {
  return (
    <S.GridItem key={movie.id}>
      <Link data-testid="item-link" to={`/detail/${movie.id}`}>
        <S.Card
          data-testid="around-backdropPath"
          backdropPath={movie.backdropPath}
        />
        <S.Content>
          <span data-testid="around-title">{movie.title}</span>
          <StarRatings
            rating={movie.rating / 2}
            starRatedColor="#ffda33"
            numberOfStars={5}
            starDimension="30px"
            starSpacing="2px"
          />
        </S.Content>
      </Link>
    </S.GridItem>
  );
};

AroundCardItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdropPath: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default AroundCardItem;
