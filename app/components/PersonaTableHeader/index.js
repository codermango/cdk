/**
*
* PersonaTableHeader
*
*/

import React from 'react';

import styles from './styles.css';

class PersonaTableHeader extends React.Component {

  static defaultProps = {
    sortRow: () => {},
  };

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
    const name = evt.currentTarget.getAttribute('name');
    const order = this.state[name] === 'desc' ? 'asc' : 'desc';
    this.setState({ [name]: this.state[name] === 'desc' ? 'asc' : 'desc' });
    this.props.sortRow(name, order);
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
        {/* data ?
          data.map((item, i) => {
            if (item.sortable) {
              const className = this.state[item.name] === 'desc' ? styles.descArrow : styles.ascArrow;
              return (
                <div key={i} className={styles.colHeader} style={{ width: item.width }}>
                  <div className={styles.title}>{item.title}</div>
                  <div name={item.name} className={className} onClick={(evt) => this.arrowClicked(evt)}></div>
                </div>
              );
            } else {
              return (
                <div key={i} className={styles.colHeader} style={{ width: item.width }}>
                  <div className={styles.title}>{item.title}</div>
                </div>
              );
            }
          })
          :
          ''
        */}
      </div>
    );
  }
}

export default PersonaTableHeader;
