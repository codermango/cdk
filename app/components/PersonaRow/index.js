/**
*
* PersonaRow
*
*/

import React from 'react';

import TextCell from '../TextCell';
import FormatTextCell from '../FormatTextCell';
import PosterCell from '../PosterCell';

import styles from './styles.css';
import defaultPoster from './default_poster.png';

function PersonaRow(props) {
  const { data } = props;
  const className = props.className ? props.className : styles.personaRow;
  return (
    <div className={className}>
      <div className={styles.cellWrapper} style={{ width: '20%' }}>
        <TextCell data={data.desc} />
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
      <div className={styles.cellWrapper} style={{ width: '20%' }}>
        <FormatTextCell data={data.avgViewingTime} type="time" />
      </div>
      <div className={`${styles.cellWrapper} ${styles.posterDiv}`} style={{ width: '15%' }} >
        <PosterCell data={data.posters} />
      </div>
      <div className={styles.cellWrapper} style={{ width: '10%' }}>
        <TextCell data={data.device} />
      </div>
    </div>
  );
}

PersonaRow.propTypes = {
  data: React.PropTypes.object,
  className: React.PropTypes.string,
};

PersonaRow.defaultProps = {
  data: {
    size: '34%',
    avgViewingTime: {
      value: 7403,
      change: -11,
    },
    posters: [defaultPoster, defaultPoster, defaultPoster],
    desc: 'Mainstream action, advanture, comedy with high speed and mixed colors',
    device: 'iPad',
    uniqueViewers: {
      value: 46,
      change: -12,
    },
    avgFinishedMovies: {
      value: 3,
      change: 11,
    },
  },
};

export default PersonaRow;
