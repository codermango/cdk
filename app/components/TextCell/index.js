/**
*
* TextCell
*
*/

import React from 'react';

import styles from './styles.css';

function TextCell(props) {
  const { data, type } = props;
  let contentDiv = '';
  if (type === "text") {
    contentDiv = (<div>{data.text}</div>);
  } else if (type === 'time') {
    contentDiv = (
      <div>
        <div>Mon-Thu: {data.weekday}</div>
        <div>Fri-Sun: {data.weekend}</div>
      </div>
    );
  } else if (type === 'percentage') {
    contentDiv = (
      <div style={{ fontSize: '3vw', color: '#000' }} >
        {data.percentage}%
      </div>
    );
  }
  return (
    <div className={styles.textCell}>
      {contentDiv}
    </div>
  );
}

TextCell.propTypes = {
  data: React.PropTypes.object,
  type: React.PropTypes.string,
};

export default TextCell;
