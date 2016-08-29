/**
*
* FormatTextCell
*
*/

import React from 'react';
import {IntlProvider, FormattedNumber, FormattedMessage} from 'react-intl';

import styles from './styles.css';
// import clockIcon from '../stories/images/clock.png';

function FormatTextCell(props) {
  const { type, data } = props;
  const percentageText = data.change > 0 ? `+${data.change}%` : `${data.change}%`;
  const percentageColor = data.change > 0 ? '#3FA650' : '#D73938';
  let mainTextDiv = '';
  if (type === 'time') {
    mainTextDiv = (
      <div className={styles.mainText}>
        <FormattedMessage
          id="kpi.time"
          defaultMessage="{min}M {sec}S"
          values={{
            min: <span className={styles.number}>{Math.round(data.value / 60)}</span>,
            sec: <span className={styles.number}>{Math.round(data.value % 60)}</span>,
          }}
        />
      </div>
    );
  } else if (type === 'currency') {
    mainTextDiv = (
      <div className={styles.mainText}>
        <span className={styles.number}>{data.value}</span>sek
      </div>
    );
  } else if (type === 'number') {
    mainTextDiv = (
      <div className={styles.mainText}>
        <span className={styles.number}>
          <FormattedNumber
            value={data.value}
          />
        </span>
      </div>
    );
  }
  return (
    <div className={styles.formatTextCell}>
      <div className={styles.text}>
        {mainTextDiv}
        <div className={styles.subText} style={{ color: percentageColor }}>
          <FormattedNumber
            value={data.change}
            style="percent"
          />
        </div>
      </div>
    </div>
  );
}

FormatTextCell.propTypes = {
  type: React.PropTypes.string,
  data: React.PropTypes.object,
};

FormatTextCell.defaultProps = {
  data: {
    value: 3,
    change: 11,
  },
  type: 'number',
};

export default FormatTextCell;
