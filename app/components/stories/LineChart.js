import React from 'react';
import LineChart from '../LineChart';
import { storiesOf } from '@kadira/storybook';

storiesOf('LineChart', module)
  .add('default', () => (
    <div style={{ display: 'flex', flex: 1 }}>
      <LineChart />
    </div>
  ));
