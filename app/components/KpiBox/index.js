/**
*
* KpiBox
*
*/

import React from 'react';


import styles from './styles.css';

function KpiBox(props) {
  return (
    <div className={styles.kpiBox}>
      {props.children}
    </div>
  );
}

export default KpiBox;
