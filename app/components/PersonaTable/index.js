/**
*
* PersonaTable
*
*/

import React from 'react';

import PersonaTableHeader from '../PersonaTableHeader';
import PersonaRow from '../PersonaRow';

import styles from './styles.css';
import defaultPoster from './default_poster.png';


class PersonaTable extends React.Component {
  static defaultProps = {
    data: [
      {
        size: '34%',
        avgViewingTime: {
          value: 7403,
          change: -0.11,
        },
        posters: [defaultPoster, defaultPoster, defaultPoster],
        desc: 'Mainstream action, advanture, comedy with high speed and mixed colors.',
        device: 'iPad',
        uniqueViewers: {
          value: 46,
          change: -0.12,
        },
        avgFinishedMovies: {
          value: 3,
          change: 0.56,
        },
      },
    ],
  };
  static propTypes = {
    data: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      sortedData: this.props.data.sort((x, y) => x.size < y.size),
    };
    this.sortRow = this.sortRow.bind(this);
  }

  sortRow(sortBy, order) {
    let sortFunc = null;
    if ({}.hasOwnProperty.call(this.props.data[0][sortBy], 'value')) {
      sortFunc = order === 'asc' ?
        (x, y) => x[sortBy].value > y[sortBy].value
        :
        (x, y) => x[sortBy].value < y[sortBy].value;
    } else {
      sortFunc = order === 'asc' ? (x, y) => x[sortBy] > y[sortBy] : (x, y) => x[sortBy] < y[sortBy];
    }
    this.setState({
      sortedData: this.props.data.sort(sortFunc),
    });
  }

  render() {
    // const { data } = this.props;
    const headerData = Object.keys(this.props.data[0]);
    return (
      <div className={styles.personaTable}>
        <PersonaTableHeader data={headerData} sortRow={this.sortRow} />
        {this.state.sortedData ?
          this.state.sortedData.map((rowData, i) => (
            <PersonaRow key={i} className={styles.personaRow} data={rowData} />
          ))
          :
          ''
        }
      </div>
    );
  }
}

export default PersonaTable;
