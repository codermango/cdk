import React from 'react';
import SideNav from '../SideNav';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('SideNav', module)
  .add('default view', () => {
    return (
      <div>
        <SideNav />
      </div>
    );
  });
