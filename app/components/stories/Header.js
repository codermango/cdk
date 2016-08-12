import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header';
import { storiesOf } from '@kadira/storybook';

const muiStyles = () => getMuiTheme({
  textField: {
    textColor: '#528C9C',
    hintColor: '#528C9C',
    borderColor: 'transparent',
  },
});

storiesOf('Header', module)
  .add('default view', () => (
    <MuiThemeProvider muiTheme={muiStyles()}>
      <Header />
    </MuiThemeProvider>
  ));
