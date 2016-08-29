/**
 * Created by mark on 8/23/16.
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import KpiBox from '../KpiBox';
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

const churn = {
  value: 0.76,
  change: -0.34,
};

const chartData = [
  { x: 'iPad', y: 3 },
  { x: 'iPhone', y: 5 },
  { x: 'Smart TV', y: 4 },
  { x: 'PC & Mac', y: 2 },
  { x: 'Android', y: 1 },
  { x: 'xbox', y: 3 },
];

storiesOf('KpiBox', module)
  .add('default', () => (
    <IntlProvider locale="en">
      <KpiBox>
        <InfoCard title="active viewers" data={numberData} type="currency" />
        <InfoCard title="total amount" data={numberData} type="currency" />
        <InfoCard title="avg viewing time" data={timeData} type="time" />
        <InfoCard title="churn" data={churn} type="percent" colorReverse />
        <InfoCard title="device" type="chart">
          <DonutCard data={chartData} />
        </InfoCard>
      </KpiBox>
    </IntlProvider>
  ));
