import React from 'react';
import BarChart from '../BarChart';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('BarChart', module)
  .add('default', () => {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <BarChart />
      </div>
    )
  });
