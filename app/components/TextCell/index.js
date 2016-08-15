/**
*
* TextCell
*
*/

import React from 'react';

import styles from './styles.css';

function TextCell(props) {
  const { data } = props;
  return (
    <div className={styles.textCell}>
      {data.text}
    </div>
  );
}

TextCell.propTypes = {
  data: React.PropTypes.object,
};

export default TextCell;
