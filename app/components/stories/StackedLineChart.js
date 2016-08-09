import React from 'react';
import StackedLineChart from '../StackedLineChart';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('StackedLineChart', module)
  .add('default', () => {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <StackedLineChart />
      </div>
    )
  });
