/**
 * Created by mark on 8/15/16.
 */
import React from 'react';
import TextCell from '../TextCell';
import { storiesOf } from '@kadira/storybook';

const data1 = {
  text: 'Mainstream action, advanture, comedy with high speed and mixed colors',
};

const data2 = {
  text: 'iPad',
};

storiesOf('TextCell', module)
  .add('description', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <TextCell data={data1} />
    </div>
  ))
  .add('device', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <TextCell data={data2} />
    </div>
  ));
