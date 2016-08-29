/**
 * Created by mark on 8/15/16.
 */
import React from 'react';
import TextCell from '../TextCell';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@kadira/storybook';

const data1 = 'Mainstream action, advanture, comedy with high speed and mixed colors';

const data2 = 'iPad';

const data4 = '43%';

storiesOf('TextCell', module)
  .add('default', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <TextCell />
      </div>
    </IntlProvider>
  ))
  .add('description', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <TextCell data={data1} type="text" />
      </div>
    </IntlProvider>
  ))
  .add('device', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <TextCell data={data2} type="text" />
      </div>
    </IntlProvider>
  ))
  .add('size', () => (
    <IntlProvider locale="en">
      <div style={{ width: '300px', height: '100px' }}>
        <TextCell data={data4} type="percentage" />
      </div>
    </IntlProvider>
  ));
