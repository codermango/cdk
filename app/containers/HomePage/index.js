/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AreaChart from 'components/AreaChart';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const data = [
      {
        "x": 1420066800000,
        "y": 18931,
        "label": 18931
      },
      {
        "x": 1422745200000,
        "y": 17448,
        "label": 17448
      },
      {
        "x": 1425164400000,
        "y": 18683,
        "label": 18683
      }
    ];
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <AreaChart />
      </h1>
    );
  }
}
