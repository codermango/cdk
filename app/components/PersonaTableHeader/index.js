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
      <div className={styles.colHeader} style={{ width: '20%' }}>
        <div className={styles.title}>description</div>
      </div>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        <div className={styles.title}>size</div>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        <div className={styles.title}>unique viewers</div>
      </div>
      <div className={styles.colHeader} style={{ width: '15%' }}>
        <div className={styles.title}>avg finished movies</div>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.colHeader} style={{ width: '20%' }}>
        <div className={styles.title}>avg viewing time</div>
        <div className={styles.arrow}></div>
      </div>
      <div className={`${styles.colHeader} ${styles.posterDiv}`} style={{ width: '15%' }}>
        <div className={styles.title}>top titles</div>
      </div>
      <div className={styles.colHeader} style={{ width: '10%' }}>
        <div className={styles.title}>device</div>
      </div>
      {/*
      <div className={styles.colHeader} style={{ width: '10%' }}>
        prime time
      </div>
      */}
    </div>
  );
}

export default PersonaTableHeader;
