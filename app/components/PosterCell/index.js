/**
*
* PosterCell
*
*/

import React from 'react';


import styles from './styles.css';

function PosterCell(props) {
  return (
    <div className={styles.posterCell}>
      <div className={styles.poster}>
        <img className={styles.img} src={props.data[0]} alt="img" />
      </div>
      <div className={styles.poster}>
        <img className={styles.img} src={props.data[1]} alt="img" />
      </div>
      <div className={styles.poster}>
        <img className={styles.img} src={props.data[2]} alt="img" />
      </div>
    </div>
  );
}

PosterCell.propTypes = {
  data: React.PropTypes.array,
};

export default PosterCell;
