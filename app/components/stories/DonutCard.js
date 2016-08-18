/**
 * Created by mark on 8/12/16.
 */
import React from 'react';
import DonutCard from '../DonutCard';
import { storiesOf } from '@kadira/storybook';

storiesOf('DonutCard', module)
  .add('default', () => (
    <div style={{ position: 'absolute', width: '500px', height: '200px' }}>
      <DonutCard />
    </div>
  ));
