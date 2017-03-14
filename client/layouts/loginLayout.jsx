import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Helmet from "react-helmet";
import ThemeDefault from '../theme-default';

const loginLayout = ({content}) => {
  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
         <Helmet
            title="Login"
            meta={[
                {"name": "Login Page", "content": "Page Application"}
                ]}
          />
        {content()}
      </div>
    </MuiThemeProvider>
  );
};

export default loginLayout;