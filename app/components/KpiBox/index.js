/**
*
* KpiBox
*
*/

import React from 'react';
import InfoCard from '../InfoCard';

import styles from './styles.css';

function KpiBox(props) {
  const { data } = props;
  return (
    <div className={styles.kpiBox}>
      <div className={styles.row}>
        <InfoCard title="active viewers" data={data[0]} type="number" />
        <InfoCard title="total amount" data={data[1]} type="time" />
      </div>
      <div className={styles.row}>
        <InfoCard title="avg viewing time" data={data[2]} type="percent" />
        <InfoCard title="churn" data={data[3]} type="percent" colorReverse />
      </div>
    </div>
  );
}

KpiBox.propTypes = {
  data: React.PropTypes.array,
};

export default KpiBox;
