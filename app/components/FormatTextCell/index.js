/**
*
* FormatTextCell
*
*/

import React from 'react';


import styles from './styles.css';
import clockIcon from '../stories/images/clock.png';

function FormatTextCell(props) {
  const { type, data } = props;
  let iconDiv = '';
  let mainTextDiv = '';
  if (type === 'time') {
    iconDiv = (
      <div className={styles.icon}>
        <img src={clockIcon} alt="clock" />
      </div>
    );
    mainTextDiv = (
      <div className={styles.mainText}>
        <span className={styles.number}>{data.min}</span>min <span className={styles.number}>{data.sec}</span>sec
      </div>
    );
  } else if (type === 'currency') {
    mainTextDiv = (
      <div className={styles.mainText}>
        <span className={styles.number}>{data}</span>sek
      </div>
    );
  }
  return (
    <div className={styles.formatTextCell}>
      {iconDiv}
      <div className={styles.text}>
        {mainTextDiv}
        <div className={styles.subText}>
          +11%
        </div>
      </div>
    </div>
  );
}

FormatTextCell.propTypes = {
  type: React.PropTypes.string,
  data: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.object,
  ]),
};

export default FormatTextCell;
