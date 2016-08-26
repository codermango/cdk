/**
 * Created by mark on 8/17/16.
 */
import React from 'react';
import InfoCard from '../InfoCard';
import DonutCard from '../DonutCard';
import { storiesOf } from '@kadira/storybook';


const numberData = {
  number: 17.344,
  unit: 'sek',
  subText: 'DECREASE -11%',
  subTextColor: '#C81916',
};

const timeData = {
  min: 21,
  sec: 33,
  subText: 'INCREASE -11%',
  subTextColor: '#009800',
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
    <div style={{ display: 'flex' }}>
      <InfoCard />
    </div>
  ))
  .add('number text view', () => (
    <div style={{ display: 'flex' }}>
      <InfoCard title={'Avg Viewer'} data={numberData} type="number" />
    </div>
  ))
  .add('time text view', () => (
    <div style={{ display: 'flex' }}>
      <InfoCard title={'time'} data={timeData} type="time" />
    </div>
  ))
  .add('chart view', () => (
    <div style={{ display: 'flex' }}>
      <InfoCard title="device" type="chart">
        <DonutCard data={chartData} />
      </InfoCard>
    </div>
  ));
