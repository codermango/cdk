/**
 * Created by mark on 8/16/16.
 */
import React from 'react';
import PersonaTableHeader from '../PersonaTableHeader';
import { storiesOf } from '@kadira/storybook';

storiesOf('PersonaTableHeader', module)
  .add('default', () => (
    <div>
      <PersonaTableHeader />
    </div>
  ));
