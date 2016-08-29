/**
 * Created by mark on 8/17/16.
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import InfoCard from '../InfoCard';
import DonutCard from '../DonutCard';
import { storiesOf } from '@kadira/storybook';


const numberData = {
  value: 17.344,
  change: -0.11,
};

const timeData = {
  value: 13212,
  change: 0.56,
};

const chartData = [
  { x: 'iPad', y: 3 },
  { x: 'iPhone', y: 5 },
  { x: 'Smart TV', y: 4 },
  { x: 'PC & Mac', y: 2 },
  { x: 'Android', y: 1 },
  { x: 'xbox', y: 3 },
];


storiesOf('InfoCard', module)
  .add('default', () => (
    <IntlProvider locale="en">
      <div style={{ display: 'flex' }}>
        <InfoCard />
      </div>
    </IntlProvider>
  ))
  .add('number text view', () => (
    <IntlProvider locale="en">
      <div style={{ display: 'flex' }}>
        <InfoCard title={'Avg Viewer'} data={numberData} type="currency" />
      </div>
    </IntlProvider>
  ))
  .add('time text view', () => (
    <IntlProvider locale="en">
      <div style={{ display: 'flex' }}>
        <InfoCard title={'time'} data={timeData} type="time" />
      </div>
    </IntlProvider>
  ))
  .add('chart view', () => (
    <IntlProvider locale="en">
      <div style={{ display: 'flex' }}>
        <InfoCard title="device" type="chart">
          <DonutCard data={chartData} />
        </InfoCard>
      </div>
    </IntlProvider>
  ));
