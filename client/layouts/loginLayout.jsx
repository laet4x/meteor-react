import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../theme-default';

const loginLayout = ({content}) => {
  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        {content()}
      </div>
    </MuiThemeProvider>
  );
};

export default loginLayout;