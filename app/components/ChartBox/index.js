/**
*
* ChartBox
*
*/

import React from 'react';

import styles from './styles.css';

class ChartBox extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
  };
  static defaultProps = {
    title: 'Completness',
    description: 'hahahahahahaha',
  };

  constructor(props) {
    super(props);
    this.state = {
      dimension: false,
    };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
  }

  resize() {
    this.setState({ dimension: this.body.getBoundingClientRect() });
  }

  render() {
    const { title, description, ...rest } = this.props;

    return (
      <div className={styles.chartBox}>
        <div className={styles.chartHeader}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.description}>{description}</span>
        </div>
        <div ref={(body => { this.body = body; })} className={styles.chartBody}>
          <div className={styles.body} {...rest} />
        </div>
      </div>
    );
  }
}

export default ChartBox;
