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
      <div className={styles.colHeader} style={{ width: '150px' }}>
        size
      </div>
      <div className={styles.colHeader} style={{ width: '100px' }}>
        status
      </div>
      <div className={styles.colHeader} style={{ width: '150px' }}>
        arpu
      </div>
      <div className={styles.colHeader} style={{ width: '300px' }}>
        avg viewing time
      </div>
      <div className={styles.colHeader}>
        top titles
      </div>
      <div className={styles.colHeader} style={{ width: '300px', padding: '0 30px' }}>
        description
      </div>
      <div className={styles.colHeader} style={{ width: '150px' }}>
        device
      </div>
      <div className={styles.colHeader} style={{ width: '200px' }}>
        prime time
      </div>
    </div>
  );
}

export default PersonaTableHeader;
