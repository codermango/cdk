/**
*
* TextCell
*
*/

import React from 'react';

import styles from './styles.css';

function TextCell(props) {
  const { data, type } = props;
  const className = type === 'percentage' ? styles.percentage : styles.text;
  return (
    <div className={styles.textCell}>
      <div className={className}>
        {data}
      </div>
    </div>
  );
}

TextCell.propTypes = {
  data: React.PropTypes.string,
  type: React.PropTypes.string,
};

TextCell.defaultProps = {
  data: 'Mainstream action, advanture, comedy with high speed and mixed colors',
  type: 'text',
};

export default TextCell;
