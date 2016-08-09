/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <ul>
        {props.routes ?
          props.routes.map(route =>
            <li key={route.id} className={styles.navItem}>{route.name}</li>
          )
          :
          ''
        }
      </ul>
    </div>
  );
}

export default Navigation;
