import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ExitSettingsButton from './ExitSettingsButton.js';

storiesOf('ExitSettingsButton', module)
  .add('default', () => <ExitSettingsButton />);