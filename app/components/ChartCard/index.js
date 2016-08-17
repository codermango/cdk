/**
*
* ChartCard
*
*/

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

class ChartCard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    loading: React.PropTypes.bool,
  }

  static defaultProps = {
    title: 'Chart Title',
    description: 'Chart description',
  }

  constructor(props) {
    super(props);
    this.state = {
      dimension: false,
    };

    // this.resize = this.resize.bind(this);
  }

  // componentDidMount() {
  //   this.resize();
  //   window.addEventListener('resize', this.resize, false);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.resize, false);
  // }
  //
  // resize() {
  //   console.log(this.body);
  //   this.setState({ dimension: this.body.getBoundingClientRect() });
  // }

  render() {
    const { title, description, loading, ...rest } = this.props;
    // const bodyHeight = this.state.dimension.height > 0 ? this.state.dimension.height : 200;
    return (
      <div className={styles.chartCard}>
        <div className={styles.header}>
          <h3 className={styles.chartHeader}>{title}</h3>
          <span className={styles.chartDescription}>{description}</span>
        </div>
        <div className={styles.body} ref={body => { this.body = body; }} style={{ height: '300px' }}>
          {loading ?
            <div className={styles.loading}><CircularProgress /></div>
            :
            <div style={{ height: '100%' }} {...rest} />
          }
        </div>
      </div>
    );
  }
}

export default ChartCard;
