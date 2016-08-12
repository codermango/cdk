/**
 * Created by mark on 8/9/16.
 */
import React from 'react';
import MovieList from '../MovieList';
import { storiesOf } from '@kadira/storybook';

storiesOf('MovieList', module)
  .add('default', () => (
    <div style={{ width: '500px' }}>
      <MovieList />
    </div>
  ));
