import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header';
import { storiesOf, action } from '@kadira/storybook';

const MuiStyles = () => getMuiTheme({
  textField: {
    textColor: '#528C9C',
    hintColor: '#528C9C',
    borderColor: '#2b3b4c',
  }
});

storiesOf('Header', module)
  .add('default view', () => {
    return (
      <MuiThemeProvider muiTheme={MuiStyles()}>
        <Header />
      </MuiThemeProvider>
    );
  });
