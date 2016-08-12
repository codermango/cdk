import React from 'react';
import StackedLineChart from '../StackedLineChart';
import { storiesOf } from '@kadira/storybook';

storiesOf('StackedLineChart', module)
  .add('default', () => (
    <div style={{ display: 'flex', flex: 1 }}>
      <StackedLineChart />
    </div>
  ));
