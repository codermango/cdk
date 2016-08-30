/**
*
* InfoCard
*
*/

import React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import styles from './styles.css';

function InfoCard(props) {
  const { title, data, type, colorReverse } = props;
  let subTextColor = '';
  if (colorReverse) {
    subTextColor = data.change < 0 ? '#009800' : '#C81916';
  } else {
    subTextColor = data.change > 0 ? '#009800' : '#C81916';
  }

  const subText = data.change > 0 ? `INCREASE ${Math.round(data.change * 100)}%` : `DECREASE ${Math.round(data.change * 100)}%`;
  let contentDiv = '';

  if (type === 'currency') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.data}>
          <FormattedMessage
            id="kpi.currency"
            defaultMessage="{amount}sek"
            values={{
              amount: <span className={styles.number}>{data.value.toFixed(2)}</span>,
            }}
          />
        </div>
        <div className={styles.subText} style={{ color: subTextColor }}>
          {subText}
        </div>
      </div>
    );
  } else if (type === 'time') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.data}>
          <FormattedMessage
            id="kpi.time"
            defaultMessage="{min}M {sec}S"
            values={{
              min: <span className={styles.number}>{Math.round(data.value / 60)}</span>,
              sec: <span className={styles.number}>{Math.round(data.value % 60)}</span>,
            }}
          />
        </div>
        <div className={styles.subText} style={{ color: subTextColor }}>
          {subText}
        </div>
      </div>
    );
  } else if (type === 'percent') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.data}>
          <FormattedMessage
            id="kpi.percent"
            defaultMessage="{percent}%"
            values={{
              percent: <span className={styles.number}>{(data.value * 100).toFixed(2)}</span>,
            }}
          />
        </div>
        <div className={styles.subText} style={{ color: subTextColor }}>
          {subText}
        </div>
      </div>
    );
  } else if (type === 'number') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.data}>
          <div className={styles.number}>
            <FormattedNumber
              value={data.value}
            />
          </div>
        </div>
        <div className={styles.subText} style={{ color: subTextColor }}>
          {subText}
        </div>
      </div>
    );
  }else if (type === 'chart') {
    contentDiv = (
      <div className={styles.infoCard}>
        <div className={styles.title}>{title}</div>
        {props.children}
      </div>
    );
  }
  return contentDiv;
}

InfoCard.propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.object,
  type: React.PropTypes.string,
  colorReverse: React.PropTypes.bool,
  children: React.PropTypes.node,
};

InfoCard.defaultProps = {
  title: 'active viewers',
  data: {
    value: 17.344,
    change: -0.45,
  },
  type: 'currency',
};


export default InfoCard;
