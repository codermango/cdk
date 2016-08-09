import React from 'react';
import ChartCard from '../ChartCard';
import AreaChart from '../AreaChart';
import BarChart from '../BarChart';
import LineChart from '../LineChart';
import StackedLineChart from '../StackedLineChart';
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
  })
  .add('LineChart view', () => {
    return (
      <div>
        <ChartCard height={200}>
          <LineChart />
        </ChartCard>
      </div>
    );
  })
  .add('StackedLineChart view', () => {
    return (
      <div>
        <ChartCard height={200}>
          <StackedLineChart />
        </ChartCard>
      </div>
    );
  });
