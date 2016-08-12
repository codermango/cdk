import React from 'react';
import SideNav from '../SideNav';
import { storiesOf } from '@kadira/storybook';

storiesOf('SideNav', module)
  .add('default view', () => (
    <div>
      <SideNav />
    </div>
  ));
