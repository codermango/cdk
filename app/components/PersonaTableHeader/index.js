/**
*
* PersonaTableHeader
*
*/

import React from 'react';

import styles from './styles.css';

class PersonaTableHeader extends React.Component {

  static propTypes = {
    sortRow: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      size: 'desc',
      uniqueViewers: 'desc',
      avgFinishedMovies: 'desc',
      avgViewingTime: 'desc',
    };
  }

  arrowClicked(evt) {
    const title = evt.currentTarget.getAttribute('name');
    const order = this.state[title] === 'desc' ? 'asc' : 'desc';
    this.setState({ [title]: this.state[title] === 'desc' ? 'asc' : 'desc' });
    this.props.sortRow(title, order);
  }

  render() {
    const sizeStyle = this.state.size === 'desc' ? styles.descArrow : styles.ascArrow;
    const uniqueViewersStyle = this.state.uniqueViewers === 'desc' ? styles.descArrow : styles.ascArrow;
    const avgFinishedMoviesStyle = this.state.avgFinishedMovies === 'desc' ? styles.descArrow : styles.ascArrow;
    const avgViewingTimeStyle = this.state.avgViewingTime === 'desc' ? styles.descArrow : styles.ascArrow;

    return (
      <div className={styles.personaTableHeader}>
        <div className={styles.colHeader} style={{ width: '20%' }}>
          <div className={styles.title}>description</div>
        </div>
        <div className={styles.colHeader} style={{ width: '10%' }}>
          <div className={styles.title}>size</div>
          <div name="size" className={sizeStyle} onClick={(evt) => this.arrowClicked(evt)}></div>
        </div>
        <div className={styles.colHeader} style={{ width: '10%' }}>
          <div className={styles.title}>unique viewers</div>
          <div name="uniqueViewers" className={uniqueViewersStyle} onClick={(evt) => this.arrowClicked(evt)}></div>
        </div>
        <div className={styles.colHeader} style={{ width: '15%' }}>
          <div className={styles.title}>avg finished movies</div>
          <div name="avgFinishedMovies" className={avgFinishedMoviesStyle} onClick={(evt) => this.arrowClicked(evt)}></div>
        </div>
        <div className={styles.colHeader} style={{ width: '20%' }}>
          <div className={styles.title}>avg viewing time</div>
          <div name="avgViewingTime" className={avgViewingTimeStyle} onClick={(evt) => this.arrowClicked(evt)}></div>
        </div>
        <div className={`${styles.colHeader} ${styles.posterDiv}`} style={{ width: '15%' }}>
          <div className={styles.title}>top titles</div>
        </div>
        <div className={styles.colHeader} style={{ width: '10%' }}>
          <div className={styles.title}>device</div>
        </div>
        {/*
         <div className={styles.colHeader} style={{ width: '10%' }}>
         prime time
         </div>
         */}
      </div>
    );
  }


}

export default PersonaTableHeader;
