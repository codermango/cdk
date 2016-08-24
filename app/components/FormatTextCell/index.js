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
  const percentageText = data.change > 0 ? `+${data.change}%` : `${data.change}%`;
  const percentageColor = data.change > 0 ? '#3FA650' : '#D73938';
  let iconDiv = '';
  let mainTextDiv = '';
  if (type === 'time') {
    iconDiv = (
      <div className={styles.icon}>
        <img className={styles.img} src={clockIcon} alt="clock" />
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
        <span className={styles.number}>{data.amount}</span>sek
      </div>
    );
  } else if (type === 'number') {
    mainTextDiv = (
      <div className={styles.mainText}>
        <span className={styles.number}>{data.number}</span>
      </div>
    );
  }
  return (
    <div className={styles.formatTextCell}>
      {iconDiv}
      <div className={styles.text}>
        {mainTextDiv}
        <div className={styles.subText} style={{ color: percentageColor }}>
          {percentageText}
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
