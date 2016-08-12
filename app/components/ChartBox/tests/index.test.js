import ChartBox from '../index';

import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

describe('<ChartBox />', () => {
  it('should render the ChartBox component', () => {
    const renderedComponent = render(<ChartBox width={500} />);
    expect(renderedComponent.find(ChartBox)).toExist();
  });
});
