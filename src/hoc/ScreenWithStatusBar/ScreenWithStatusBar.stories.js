import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ScreenWithStatusBar from './ScreenWithStatusBar.js';

storiesOf('ScreenWithStatusBar', module)
  .add('default', () => <ScreenWithStatusBar />);