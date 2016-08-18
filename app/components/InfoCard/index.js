/**
*
* InfoCard
*
*/

import React from 'react';


import styles from './styles.css';

function InfoCard(props) {
  const { data, type } = props;
  let contentDiv = '';
  if (type === 'number') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.data}>
          <span className={styles.number}>{data.number}</span>
          <span className={styles.unit}>{data.unit}</span>
        </div>
        <div className={styles.subText} style={{ color: data.subTextColor }}>
          {data.subText}
        </div>
      </div>
    );
  } else if (type === 'time') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.data}>
          <span className={styles.number}>{data.min}</span>
          <span className={styles.unit}>M</span>
          <span className={styles.number}>{data.sec}</span>
          <span className={styles.unit}>S</span>
        </div>
        <div className={styles.subText} style={{ color: data.subTextColor }}>
          {data.subText}
        </div>
      </div>
    );
  } else if (type === 'chart') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{data.title}</div>
        {props.children}
      </div>
    );
  }
  return contentDiv;
}

InfoCard.propTypes = {
  data: React.PropTypes.object,
};


export default InfoCard;
