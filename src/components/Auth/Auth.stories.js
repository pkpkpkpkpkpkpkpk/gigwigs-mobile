import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Auth from './Auth.js';

storiesOf('Auth', module)
  .add('default', () => <Auth />);