import React from 'react';
import { addDecorator } from '@storybook/react';
import withGlobalStyle from './decorators';
import StoryRouter from 'storybook-react-router';

addDecorator(withGlobalStyle);
addDecorator(StoryRouter());
