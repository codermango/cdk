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
      <img src={data.icon} alt="icon" />
    </div>
  );
}

IconCell.propTypes = {
  data: React.PropTypes.object,
};

export default IconCell;
