/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PersonaTable from '../PersonaTable';
import { storiesOf } from '@kadira/storybook';

import poster1 from './images/1Rs4oQs5wONsWAZoqvOo1x9CjPC.jpg';
import poster2 from './images/5N20rQURev5CNDcMjHVUZhpoCNC.jpg';
import poster3 from './images/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg';
import happyIcon from './images/happy_smiley.png';
import unhappyIcon from './images/unhappy_smiley.png';

const data = [
  {
    size: 34,
    status: happyIcon,
    arpu: {
      amount: 45,
      change: 12,
    },
    avgViewingTime: {
      min: 123,
      sec: 23,
      change: -11,
    },
    posters: [poster1, poster2, poster3],
    desc: 'Mainstream action, advanture, comedy with high speed and mixed colors.',
    device: 'iPad',
    primeTime: {
      weekday: 17.19,
      weekend: 20.07,
    },
    uniqueViewers: {
      number: 46,
      change: -12,
    },
    avgFinishedMovies: {
      number: 3,
      change: 11,
    },
  },
  {
    size: 14,
    status: happyIcon,
    arpu: {
      amount: 51,
      change: 21,
    },
    avgViewingTime: {
      min: 41,
      sec: 37,
      change: 7,
    },
    posters: [poster1, poster2, poster3],
    desc: 'Family adventure with bright colors and low speed.',
    device: 'iPad',
    primeTime: {
      weekday: 15.11,
      weekend: 11.13,
    },
    uniqueViewers: {
      number: 45,
      change: -12,
    },
    avgFinishedMovies: {
      number: 34,
      change: 11,
    },
  },
  {
    size: 11,
    status: happyIcon,
    arpu: {
      amount: 27,
      change: 7,
    },
    avgViewingTime: {
      min: 55,
      sec: 24,
      change: 13,
    },
    posters: [poster1, poster2, poster3],
    desc: 'High speed superhero action with dark colors.',
    device: 'STB',
    primeTime: {
      weekday: 19.12,
      weekend: 18.13,
    },
    uniqueViewers: {
      number: 24,
      change: -12,
    },
    avgFinishedMovies: {
      number: 34,
      change: 11,
    },
  },
  {
    size: 8,
    status: unhappyIcon,
    arpu: {
      amount: 18,
      change: -19,
    },
    avgViewingTime: {
      min: 22,
      sec: 17,
      change: -8,
    },
    posters: [poster1, poster2, poster3],
    desc: 'Teenage heroin adventure movies with high speed and bright colors.',
    device: 'STB',
    primeTime: {
      weekday: 14.12,
      weekend: 19.44,
    },
    uniqueViewers: {
      number: 19,
      change: -12,
    },
    avgFinishedMovies: {
      number: 11,
      change: 11,
    },
  },
];

storiesOf('PersonaTable', module)
  .add('default', () => (
    <MuiThemeProvider>
      <PersonaTable />
    </MuiThemeProvider>
  ))
  .add('with data', () => (
    <MuiThemeProvider>
      <PersonaTable data={data} />
    </MuiThemeProvider>
  ));
