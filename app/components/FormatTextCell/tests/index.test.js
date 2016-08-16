import FormatTextCell from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<FormatTextCell />', () => {
  it('should render the DonutCard component', () => {
    const renderedComponent = shallow(<FormatTextCell />);
    expect(renderedComponent.find(FormatTextCell)).toExist();
  });
});
