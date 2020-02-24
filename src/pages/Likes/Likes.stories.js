import React from 'react';
import withReduxDecorator from 'utils/withReduxDecorator';
import Likes from './Likes';

export default {
  title: 'pages / Likes',
  component: Likes,
};

const movieID = '495764';
export const likesNothing = () => <Likes />;
likesNothing.story = {
  name: '좋아하는 영화들 - 아무것도 없음',
  decorators: [
    storyFn => withReduxDecorator()(storyFn),
    storyFn => {
      if (localStorage.getItem(movieID) !== null) {
        localStorage.removeItem(movieID);
      }
      return storyFn();
    },
  ],
};

export const likesSomething = () => <Likes />;
likesSomething.story = {
  name: '좋아하는 영화들 - 아이템 있음',
  decorators: [
    storyFn => withReduxDecorator()(storyFn),
    storyFn => {
      localStorage.setItem(
        movieID,
        '{"id":"495764","title":"버즈 오브 프레이(할리퀸의 황홀한 해방)","posterPath":"https://image.tmdb.org/t/p/w500/cT3NC2gZXFmmQyPVpxJoJTucOFT.jpg"}',
      );
      return storyFn();
    },
  ],
};
