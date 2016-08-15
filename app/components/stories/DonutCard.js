/**
 * Created by mark on 8/12/16.
 */
import React from 'react';
import DonutCard from '../DonutCard';
import { storiesOf } from '@kadira/storybook';

storiesOf('DonutCard', module)
  .add('default', () => (
    <div style={{ width: '500px', height: '400px' }}>
      <DonutCard />
    </div>
  ));
