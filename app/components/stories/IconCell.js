/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import IconCell from '../IconCell';
import { storiesOf } from '@kadira/storybook';

import happyIcon from './images/happy_smiley.png';

const data = happyIcon;

storiesOf('IconCell', module)
  .add('default', () => (
    <div style={{ width: '100px', height: '100px' }}>
      <IconCell data={data} />
    </div>
  ));
