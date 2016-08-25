/**
*
* PersonaTable
*
*/

import React from 'react';

import PersonaTableHeader from '../PersonaTableHeader';
import PersonaRow from '../PersonaRow';

import styles from './styles.css';

class PersonaTable extends React.Component {

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
    let sortFunc = '';
    if (sortBy === 'size') {
      sortFunc = order === 'asc' ? (x, y) => x[sortBy] > y[sortBy] : (x, y) => x[sortBy] < y[sortBy];
    } else if (sortBy === 'uniqueViewers' || sortBy === 'avgFinishedMovies') {
      sortFunc = order === 'asc' ?
        (x, y) => x[sortBy].number > y[sortBy].number
        :
        (x, y) => x[sortBy].number < y[sortBy].number;
    } else if (sortBy === 'avgViewingTime') {
      sortFunc = order === 'asc' ?
        (x, y) => (x[sortBy].min * 60) + x[sortBy].sec > (y[sortBy].min * 60) + y[sortBy].sec
        :
        (x, y) => (x[sortBy].min * 60) + x[sortBy].sec < (y[sortBy].min * 60) + y[sortBy].sec;
    }

    this.setState({
      sortedData: this.props.data.sort(sortFunc),
    });
  }

  render() {
    // const { data } = this.props;
    return (
      <div className={styles.personaTable}>
        <PersonaTableHeader sortRow={this.sortRow} />
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
