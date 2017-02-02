import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();
export const MainLayout = ({navbar, content, footer}) => (
		 <MuiThemeProvider>
		  <div>
		      {navbar}
		      <div className="container">
		         {content()}
		      </div>
		      {footer}
		  </div>
		 </MuiThemeProvider> 
);