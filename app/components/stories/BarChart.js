import React from 'react';
import BarChart from '../BarChart';
import { storiesOf } from '@kadira/storybook';

storiesOf('BarChart', module)
  .add('default', () => (
    <div style={{ display: 'flex', flex: 1 }}>
      <BarChart />
    </div>
  ));
