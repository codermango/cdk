/**
 * Created by mark on 8/10/16.
 */
import React from 'react';
import ChartBox from '../ChartBox';
import MovieList from '../MovieList';
import { storiesOf } from '@kadira/storybook';

storiesOf('ChartBox', module)
  .add('default', () => (
    <div style={{ width: '700px', height: '500px' }}>
      <ChartBox />
    </div>
  ))
  .add('MovieList View', () => (
    <div style={{ width: '500px', height: '700px' }}>
      <ChartBox>
        <MovieList />
      </ChartBox>
    </div>
  ));
