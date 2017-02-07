import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import Content from '/client/components/content.jsx';
import About from '/client/components/about.jsx';
import Navbar from '/client/components/navbar.jsx';
import Footer from '/client/components/footer.jsx';


FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
      navbar: <Navbar/>,
     content: () => (
        <Content name="Ethan"/>
      ),
      footer: <Footer/>
    });
  }
});

FlowRouter.route("/about", {
  action () {
    mount(MainLayout, {
      navbar: <Navbar/>,
     content: () => (
        <About name="Ethan"/>
      ),
      footer: <Footer/>
    });
  }
});