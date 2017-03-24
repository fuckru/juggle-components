import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hello from './index';

storiesOf('Components', module)
  .add('Hello', () => (<Hello />));
