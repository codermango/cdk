/**
 *
 * MovieList
 *
 */

import React from 'react';
// import { List, ListItem } from 'material-ui/List';
// import { VictoryLabel } from 'victory';
// import BarComponent from '../BarComponent';

import styles from './styles.css';


class MovieList extends React.Component {

  static propTypes = {
    movies: React.PropTypes.array,
  };

  static defaultProps = {
    movies: [
      {
        vionelID: 'vnl.ey8gad',
        name: 'White House Down',
        runtime: 142,
        avgViewTime: 45,
        thumbnailUrl: 'http://image.tmdb.org/t/p/w185/niYdnzkrtBduR5lKtfeLXKXNaTT.jpg',
      },
      {
        vionelID: 'vnl.ey8ga3',
        name: 'Despicable Me 2',
        runtime: 142,
        avgViewTime: 45,
        thumbnailUrl: 'http://image.tmdb.org/t/p/w185/kQrYyZQHkwkUg2KlUDyvymj9FAp.jpg',
      },
      {
        vionelID: 'vnl.ey8ga2',
        name: 'Gone Girl',
        runtime: 142,
        avgViewTime: 45,
        thumbnailUrl: 'http://image.tmdb.org/t/p/w185/pzxDgXAwQ3E7WGE61PH8LefxOsS.jpg',
      },
      {
        vionelID: 'vnl.ey8ga0',
        name: 'Gravity',
        runtime: 142,
        avgViewTime: 45,
        thumbnailUrl: 'http://image.tmdb.org/t/p/w185/2gPjLWIyrWlAn2DgKMOKTBnZYyO.jpg',
      },
      {
        vionelID: 'vnl.ey8ga7',
        name: 'The Hobbit: The Battle of the Five Armies',
        runtime: 142,
        avgViewTime: 45,
        thumbnailUrl: 'http://image.tmdb.org/t/p/w185/vgAHvS0bT3fpcpnJqT6uDTUsHTo.jpg',
      },
    ],
  };

  render() {
    const { movies } = this.props;
    if (!movies) {
      return (
        <div>No movie list</div>
      );
    }
    return (
      <div className={styles.movieList}>
        {movies ?
          movies.map(movie => (
            <div key={movie.vionelID} className={styles.movieListItem}>
              <div className={styles.poster}>
                <img src={movie.thumbnailUrl} alt={movie.name} />
              </div>
              <div className={styles.content}>
                <div className={styles.name}>{movie.name}</div>
                <div className={styles.desc}>
                  <div className={styles.desc1}>Average viewing time: {movie.runtime}</div>
                  <div className={styles.desc2}>Total runtime: {movie.avgViewTime}</div>
                </div>
              </div>
            </div>
          ))
          :
          ''
        }
      </div>
    );
  }
}


export default MovieList;
