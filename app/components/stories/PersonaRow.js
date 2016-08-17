/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PersonaRow from '../PersonaRow';
import { storiesOf } from '@kadira/storybook';

import poster1 from './images/1Rs4oQs5wONsWAZoqvOo1x9CjPC.jpg';
import poster2 from './images/5N20rQURev5CNDcMjHVUZhpoCNC.jpg';
import poster3 from './images/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg';
import happyIcon from './images/happy_smiley.png';

const data = {
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
  desc: 'Mainstream action, advanture, comedy with high speed and mixed colors',
  device: 'iPad',
  primeTime: {
    weekday: 17.19,
    weekend: 20.07,
  },
};

storiesOf('PersonaRow', module)
  .add('default', () => (
    <MuiThemeProvider>
      <PersonaRow data={data} />
    </MuiThemeProvider>
  ));