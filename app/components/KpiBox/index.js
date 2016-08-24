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

KpiBox.propTypes = {
  children: React.PropTypes.node,
};

export default KpiBox;
