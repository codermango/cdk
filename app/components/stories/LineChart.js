import React from 'react';
import LineChart from '../LineChart';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('LineChart', module)
  .add('default', () => {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <LineChart />
      </div>
    )
  });
