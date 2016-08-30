/**
 * Created by mark on 8/23/16.
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import KpiBox from '../KpiBox';
import { storiesOf } from '@kadira/storybook';

const kpiData = [
  {
    value: 17,
    change: -0.11,
  },
  {
    value: 13212,
    change: 0.56,
  },
  {
    value: 0.76,
    change: -0.34,
  },
  {
    value: 0.76,
    change: -0.34,
  },
];

// const numberData = {
//   value: 17,
//   change: -0.11,
// };
//
// const timeData = {
//   value: 13212,
//   change: 0.56,
// };
//
// const churn = {
//   value: 0.76,
//   change: -0.34,
// };

// const chartData = [
//   { x: 'iPad', y: 3 },
//   { x: 'iPhone', y: 5 },
//   { x: 'Smart TV', y: 4 },
//   { x: 'PC & Mac', y: 2 },
//   { x: 'Android', y: 1 },
//   { x: 'xbox', y: 3 },
// ];

storiesOf('KpiBox', module)
  .add('default', () => (
    <IntlProvider locale="en">
      <KpiBox data={kpiData} />
    </IntlProvider>
  ));
