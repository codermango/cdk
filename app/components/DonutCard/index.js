/**
*
* DonutCard
*
*/

import React from 'react';
import { VictoryPie } from 'victory';

import styles from './styles.css';

class DonutCard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    data: React.PropTypes.array,
  };
  static defaultProps = {
    data: [
      { x: 'iPad', y: 3 },
      { x: 'iPhone', y: 5 },
      { x: 'Smart TV', y: 4 },
      { x: 'PC & Mac', y: 2 },
      { x: 'Android', y: 1 },
      { x: 'xbox', y: 3 },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      svgHeight: false,
      colors: false,
      textData: false,
      textColor: false,
    };
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize, false);
    const { data } = this.props;
    data.sort((a, b) => a.y < b.y);
    const chartHeight = this.itemDiv.getBoundingClientRect().height * 0.9;
    const colors = this.generateColors(this.props.data.length);
    this.initState(chartHeight, colors, data);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
  }

  resize() {
    this.setState({
      svgHeight: this.itemDiv.getBoundingClientRect().height * 0.9,
    });
  }

  initState(chartHeight, colors, data) {
    this.setState({
      svgHeight: chartHeight,
      colors,
      textData: data[0],
      textColor: colors[0],
    });
  }

  generateColors(n) {
    const colors = [];
    for (let i = 0; i < n; i++) {
      const colorVal = `HSL(${Math.round(360 * Math.random())}, 50%, 50%)`;
      colors.push(colorVal);
    }
    return colors;
  }

  render() {
    const colors = this.state.colors ? this.state.colors : ['#C5680C'];
    const { data } = this.props;
    data.sort((a, b) => a.y < b.y);

    return (
      <div ref={itemDiv => { this.itemDiv = itemDiv; }} className={styles.donutCard}>
        <div className={styles.items}>
          {data ?
            data.map((item, i) => (
              <div key={i} className={styles.item} style={{ color: colors[i] }}>{item.x}</div>
            ))
            :
            ''
          }
        </div>
        <div className={styles.chart}>
          <svg viewBox="0 0 75 75" style={{ height: this.state.svgHeight }}>
            <VictoryPie
              standalone={false}
              padding={0}
              height={75}
              width={75}
              innerRadius={30}
              data={data}
              style={{
                labels: { fontSize: 0 },
                data: { stroke: 'none' },
              }}
              colorScale={colors}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onMouseOver: () => [
                      {
                        mutation: (props) => {
                          this.setState({
                            textData: data[props.index],
                            textColor: colors[props.index],
                          });
                        },
                      },
                    ],
                  },
                },
              ]}
            />
          </svg>
          <div
            className={styles.highlight}
            style={{
              color: this.state.textColor,
              width: this.state.svgHeight,
              marginLeft: -this.state.svgHeight,
            }}
          >
            <div className={styles.highlightTitle}>{this.state.textData.x}</div>
            <div className={styles.highlightValue}>{this.state.textData.y}%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonutCard;
