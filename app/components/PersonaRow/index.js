/**
*
* PersonaRow
*
*/

import React from 'react';

import TextCell from '../TextCell';
// import IconCell from '../IconCell';
import FormatTextCell from '../FormatTextCell';
import PosterCell from '../PosterCell';

import styles from './styles.css';

function PersonaRow(props) {
  const { data } = props;
  const className = props.className ? props.className : styles.personaRow;
  return (
    <div className={className}>
      <div className={styles.cellWrapper} style={{ width: '20%' }}>
        <TextCell data={data.desc} type="text" />
      </div>
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <TextCell data={data.size} type="percentage" />
      </div>
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <FormatTextCell data={data.uniqueViewers} type="number" />
      </div>
      <div className={styles.cellWrapper} style={{ width: '15%' }}>
        <FormatTextCell data={data.avgFinishedMovies} type="number" />
      </div>
      {/*
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <IconCell data={data.status} />
      </div>
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <FormatTextCell data={data.arpu} type="currency" />
      </div>
       */}
      <div className={styles.cellWrapper} style={{ width: '20%' }}>
        <FormatTextCell data={data.avgViewingTime} type="time" />
      </div>
      <div className={`${styles.cellWrapper} ${styles.posterDiv}`} style={{ width: '15%' }} >
        <PosterCell data={data.posters} />
      </div>
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <TextCell data={data.device} type="text" />
      </div>
      {/*
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <TextCell data={data.primeTime} type="time" />
      </div>
      */}
    </div>
  );
}

PersonaRow.propTypes = {
  data: React.PropTypes.object,
  className: React.PropTypes.string,
};

export default PersonaRow;
