import React from 'react';
import ChartCard from '../ChartCard';
import AreaChart from '../AreaChart';
import BarChart from '../BarChart';
import LineChart from '../LineChart';
import StackedLineChart from '../StackedLineChart';
import { storiesOf } from '@kadira/storybook';

storiesOf('ChartCard', module)
  .add('default view', () => (
    <div>
      <ChartCard />
    </div>
  ))
  .add('AreaChart view', () => (
    <div>
      <ChartCard height={200}>
        <AreaChart />
      </ChartCard>
    </div>
  ))
  .add('BarChart view', () => (
    <div>
      <ChartCard height={200}>
        <BarChart />
      </ChartCard>
    </div>
  ))
  .add('LineChart view', () => (
    <div>
      <ChartCard height={200}>
        <LineChart />
      </ChartCard>
    </div>
  ))
  .add('StackedLineChart view', () => (
    <div>
      <ChartCard height={200}>
        <StackedLineChart />
      </ChartCard>
    </div>
  ));
