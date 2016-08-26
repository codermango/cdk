/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import FormatTextCell from '../FormatTextCell';
import { storiesOf } from '@kadira/storybook';

const timeData = {
  value: 3232,
  change: -11,
};

const currencyData = {
  value: 45,
  change: 12,
};

storiesOf('FormatTextCell', module)
  .add('default', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <FormatTextCell />
    </div>
  ))
  .add('with currency data', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <FormatTextCell type="currency" data={currencyData} />
    </div>
  ))
  .add('with time data', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <FormatTextCell type="time" data={timeData} />
    </div>
  ));
