import React from 'react';
import ChartCard from '../ChartCard';
import AreaChart from '../AreaChart';
import BarChart from '../BarChart';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('ChartCard', module)
  .add('default view', () => {
    return (
      <div>
        <ChartCard />
      </div>
    );
  })
  .add('AreaChart view', () => {
    return (
      <div>
        <ChartCard height={200}>
          <AreaChart />
        </ChartCard>
      </div>
    );
  })
  .add('BarChart view', () => {
    return (
      <div>
        <ChartCard height={200}>
          <BarChart />
        </ChartCard>
      </div>
    );
  });
