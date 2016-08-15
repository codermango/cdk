/**
 * Created by mark on 8/15/16.
 */
import React from 'react';
import PosterCell from '../PosterCell';
import { storiesOf } from '@kadira/storybook';

import poster1 from './images/1Rs4oQs5wONsWAZoqvOo1x9CjPC.jpg';
import poster2 from './images/5N20rQURev5CNDcMjHVUZhpoCNC.jpg';
import poster3 from './images/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg';

const data = [poster1, poster2, poster3];

storiesOf('PosterCell', module)
  .add('default', () => (
    <div style={{ width: '200px', height: '100px' }}>
      <PosterCell data={data} />
    </div>
  ));
