/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IntlProvider } from 'react-intl';
import PersonaRow from '../PersonaRow';
import { storiesOf } from '@kadira/storybook';

import poster1 from './images/1Rs4oQs5wONsWAZoqvOo1x9CjPC.jpg';
import poster2 from './images/5N20rQURev5CNDcMjHVUZhpoCNC.jpg';
import poster3 from './images/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg';

const data = {
  size: '34%',
  avgViewingTime: {
    value: 3244,
    change: -0.11,
  },
  posters: [poster1, poster2, poster3],
  desc: 'Mainstream action, advanture, comedy with high speed and mixed colors',
  device: 'iPad',
  uniqueViewers: {
    value: 46,
    change: -0.12,
  },
  avgFinishedMovies: {
    value: 3,
    change: 0.11,
  },
};

storiesOf('PersonaRow', module)
  .add('default', () => (
    <MuiThemeProvider>
      <IntlProvider locale="en">
        <PersonaRow />
      </IntlProvider>
    </MuiThemeProvider>
  ))
  .add('with data', () => (
    <MuiThemeProvider>
      <IntlProvider locale="en">
        <PersonaRow data={data} />
      </IntlProvider>
    </MuiThemeProvider>
  ));
