import React from 'react';
import AreaChart from '../AreaChart';
import { storiesOf } from '@kadira/storybook';

const data = [
  {
    x: 1420066800000,
    y: 18931,
    label: 18931,
  },
  {
    x: 1422745200000,
    y: 17448,
    label: 17448,
  },
  {
    x: 1425164400000,
    y: 18683,
    label: 18683,
  },
];

storiesOf('AreaChart', module)
  .add('default', () => (
    <div style={{ display: 'flex', flex: 1 }}>
      <AreaChart />
    </div>
  ))
  .add('time based data', () => (
    <div style={{ display: 'flex', flex: 1 }}>
      <AreaChart data={data} scale="time" />
    </div>
  ));
