/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import FormatTextCell from '../FormatTextCell';
import { storiesOf } from '@kadira/storybook';

const timeData = {
  value: 3232,
  change: -0.11,
};

const currencyData = {
  value: 45,
  change: 0.12,
};

storiesOf('FormatTextCell', module)
  .add('default', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <FormatTextCell />
      </div>
    </IntlProvider>
  ))
  .add('with currency data', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <FormatTextCell type="currency" data={currencyData} />
      </div>
    </IntlProvider>
  ))
  .add('with time data', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <FormatTextCell type="time" data={timeData} />
      </div>
    </IntlProvider>
  ));
