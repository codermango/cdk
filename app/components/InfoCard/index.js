/**
*
* InfoCard
*
*/

import React from 'react';


import styles from './styles.css';

function InfoCard(props) {
  const { title, data, type } = props;
  let contentDiv = '';
  if (type === 'number') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{title}</div>
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
        <div className={styles.title}>{title}</div>
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
        <div className={styles.title}>{title}</div>
        <div></div>
        {props.children}
      </div>
    );
  }
  return contentDiv;
}

InfoCard.propTypes = {
  data: React.PropTypes.object,
  children: React.PropTypes.node,
};

InfoCard.defaultProps = {
  title: 'active viewers',
  data: {
    number: 17.344,
    unit: 'sek',
    subText: 'DECREASE -11%',
    subTextColor: '#C81916',
  },
  type: 'number',
};


export default InfoCard;
