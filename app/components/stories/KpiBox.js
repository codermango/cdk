/**
 * Created by mark on 8/23/16.
 */
import React from 'react';
import KpiBox from '../KpiBox';
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

const chartData = {
  data: [
    { x: 'iPad', y: 3 },
    { x: 'iPhone', y: 5 },
    { x: 'Smart TV', y: 4 },
    { x: 'PC & Mac', y: 2 },
    { x: 'Android', y: 1 },
    { x: 'xbox', y: 3 },
  ],
};

storiesOf('KpiBox', module)
  .add('default', () => (
    <KpiBox>
      <InfoCard title="active viewers" data={numberData} type="number" />
      <InfoCard title="avg viewing time" data={numberData} type="number" />
      <InfoCard title="avg viewing time" data={timeData} type="time" />
      <InfoCard title="avg viewing time" data={numberData} type="number" />
      <InfoCard title="device" data={chartData} type="chart">
        <DonutCard />
      </InfoCard>
    </KpiBox>
  ));
