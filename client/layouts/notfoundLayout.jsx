import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '/client/components/navbar.jsx';
import Footer from '/client/components/footer.jsx';

export const notfoundLayout = ({content}) => (
		 <MuiThemeProvider>
		  <div>
		      <Navbar/>
		      <div className="container">
		         {content()}
		      </div>
		      <Footer/>
		  </div>
		 </MuiThemeProvider> 
);

/*export const MainLayout = ({navbar, content, footer}) => (
		 <MuiThemeProvider>
		  <div>
		      {navbar}
		      <div className="container">
		         {content()}
		      </div>
		      {footer}
		  </div>
		 </MuiThemeProvider> 
);*/