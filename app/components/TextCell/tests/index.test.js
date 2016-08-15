import TextCell from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<TextCell />', () => {
  it('should render TextCell comopnent', () => {
    const data = {
      text: 'iPad',
    };
    const renderedComponent = shallow(
      <TextCell data={data} />
    );
    expect(renderedComponent.find(TextCell)).toEqual(false);
  });
});
