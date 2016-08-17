/**
*
* IconCell
*
*/

import React from 'react';


import styles from './styles.css';

function IconCell(props) {
  const { data } = props;
  return (
    <div className={styles.iconCell}>
      <img className={styles.img} src={data} alt="icon" />
    </div>
  );
}

IconCell.propTypes = {
  data: React.PropTypes.string,
};

export default IconCell;
