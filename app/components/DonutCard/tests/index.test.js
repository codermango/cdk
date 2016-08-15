import DonutCard from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<DonutCard />', () => {
  it('should render the DonutCard component', () => {
    const renderedComponent = shallow(<DonutCard />);
    expect(renderedComponent.find(DonutCard)).toExist();
  });
});
