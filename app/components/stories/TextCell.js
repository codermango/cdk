/**
 * Created by mark on 8/15/16.
 */
import React from 'react';
import TextCell from '../TextCell';
import { storiesOf } from '@kadira/storybook';

const data1 = 'Mainstream action, advanture, comedy with high speed and mixed colors';

const data2 = 'iPad';

const data4 = '43%';

storiesOf('TextCell', module)
  .add('default', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <TextCell />
    </div>
  ))
  .add('description', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <TextCell data={data1} type="text" />
    </div>
  ))
  .add('device', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <TextCell data={data2} type="text" />
    </div>
  ))
  .add('size', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <TextCell data={data4} type="percentage" />
    </div>
  ));
