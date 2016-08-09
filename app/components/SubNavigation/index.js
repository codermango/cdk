/**
*
* SubNavigation
*
*/

import React from 'react';


import styles from './styles.css';

function SubNavigation(props) {
  return (
    <div className="subNavigation">
      <ul>
        {props.routes.map(route =>
          <li className={styles.navItem}>{route.name}</li>
        )}
        {/*<li className={styles.navItem}>Personas</li>
        <li className={styles.navItem}>Viewers</li>
        <li className={styles.navItem}>Content</li>
        <li className={styles.navItem}>Revenue</li>
        <li className={styles.navItem}>Device</li>
        <li className={styles.navItem}>Region</li>*/}
      </ul>
    </div>
  );
}

export default SubNavigation;
