import PosterCell from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import poster1 from '../../stories/images/1Rs4oQs5wONsWAZoqvOo1x9CjPC.jpg';
import poster2 from '../../stories/images/5N20rQURev5CNDcMjHVUZhpoCNC.jpg';
import poster3 from '../../stories/images/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg';

describe('<PosterCell />', () => {
  it('should render PosterCell comopnent', () => {
    const data = [poster1, poster2, poster3];
    const renderedComponent = shallow(
      <PosterCell data={data} />
    );
    expect(renderedComponent.find(PosterCell)).toEqual(false);
  });
});
