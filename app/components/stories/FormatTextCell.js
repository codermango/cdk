/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import FormatTextCell from '../FormatTextCell';
import { storiesOf } from '@kadira/storybook';

const timeData = {
  min: 34,
  sec: 13,
};

const currencyData = {
  amount: 45,
};

storiesOf('FormatTextCell', module)
  .add('with icon', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <FormatTextCell type="time" data={timeData} />
    </div>
  ))
  .add('without icon', () => (
    <div style={{ width: '300px', height: '100px' }}>
      <FormatTextCell type="currency" data={currencyData} />
    </div>
  ));
