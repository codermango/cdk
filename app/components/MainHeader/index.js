/**
*
* MainHeader
*
*/

import React from 'react';


import styles from './styles.css';

import VionelLogo from '../VionelLogo';
import Navigation from '../Navigation';

function MainHeader(props) {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.logoWrapper}>
        <VionelLogo />
      </div>
      <div className={styles.navigation}>
        <Navigation routes={props.routes} />
      </div>
    </div>
  );
}

MainHeader.propTypes = {
  routes: React.PropTypes.array,
};

export default MainHeader;
