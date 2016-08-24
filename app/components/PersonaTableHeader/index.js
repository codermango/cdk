/**
*
* PersonaTableHeader
*
*/

import React from 'react';


import styles from './styles.css';

function PersonaTableHeader() {
  return (
    <div className={styles.personaTableHeader}>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        size<div className={styles.arrow}></div>
      </div>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        status
      </div>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        arpu<div className={styles.arrow}></div>
      </div>
      <div className={styles.colHeader} style={{ width: '20%' }}>
        avg viewing time<div className={styles.arrow}></div>
      </div>
      <div className={`${styles.colHeader} ${styles.posterDiv}`} style={{ width: '15%' }}>
        top titles
      </div>
      <div className={styles.colHeader} style={{ width: '20%' }}>
        description
      </div>
      <div className={styles.colHeader} style={{ width: '5%' }}>
        device
      </div>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        prime time
      </div>
    </div>
  );
}

export default PersonaTableHeader;
