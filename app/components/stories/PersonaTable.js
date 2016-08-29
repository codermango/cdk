/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IntlProvider } from 'react-intl';
import PersonaTable from '../PersonaTable';
import { storiesOf } from '@kadira/storybook';

import poster1 from './images/1Rs4oQs5wONsWAZoqvOo1x9CjPC.jpg';
import poster2 from './images/5N20rQURev5CNDcMjHVUZhpoCNC.jpg';
import poster3 from './images/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg';

const data = [
  {
    size: '34%',
    avgViewingTime: {
      value: 7403,
      change: -11,
    },
    posters: [poster1, poster2, poster3],
    desc: 'Mainstream action, advanture, comedy with high speed and mixed colors.',
    device: 'iPad',
    uniqueViewers: {
      value: 46,
      change: -12,
    },
    avgFinishedMovies: {
      value: 3,
      change: 11,
    },
  },
  {
    size: '12%',
    avgViewingTime: {
      value: 7000,
      change: -11,
    },
    posters: [poster1, poster2, poster3],
    desc: 'Family adventure with bright colors and low speed.',
    device: 'iPad',
    uniqueViewers: {
      value: 45,
      change: -12,
    },
    avgFinishedMovies: {
      value: 34,
      change: 11,
    },
  },
  {
    size: '56%',
    avgViewingTime: {
      value: 10000,
      change: -11,
    },
    posters: [poster1, poster2, poster3],
    desc: 'High speed superhero action with dark colors.',
    device: 'STB',
    uniqueViewers: {
      value: 24,
      change: -12,
    },
    avgFinishedMovies: {
      value: 34,
      change: 11,
    },
  },
  {
    size: '39%',
    avgViewingTime: {
      value: 3000,
      change: -11,
    },
    posters: [poster1, poster2, poster3],
    desc: 'Teenage heroin adventure movies with high speed and bright colors.',
    device: 'STB',
    uniqueViewers: {
      value: 19,
      change: -12,
    },
    avgFinishedMovies: {
      value: 11,
      change: 11,
    },
  },
];

storiesOf('PersonaTable', module)
  .add('default', () => (
    <MuiThemeProvider>
      <IntlProvider locale="en">
        <PersonaTable />
      </IntlProvider>
    </MuiThemeProvider>
  ))
  .add('with data', () => (
    <MuiThemeProvider>
      <IntlProvider locale="en">
        <PersonaTable data={data} />
      </IntlProvider>
    </MuiThemeProvider>
  ));
