/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

import MainHeader from '../MainHeader';
import SubHeader from '../SubHeader';

import routes from './routes';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      topNav: 1,
    }
  }

  render() {
    const currentRoute = routes.find(route => route.id === this.state.topNav);
    return (
      <div className={styles.header}>
        <MainHeader routes={routes} />
        <SubHeader routes={currentRoute.subRoutes} />
      </div>
    );
  }
}

export default Header;
