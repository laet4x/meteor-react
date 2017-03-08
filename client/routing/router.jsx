import React from 'react';
import {mount} from 'react-mounter';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {MainLayout} from '/client/layouts/mainLayout.jsx';
import {notfoundLayout} from '/client/layouts/notfoundLayout.jsx';
import loginLayout from '/client/layouts/loginLayout.jsx';
import App from '/client/layouts/App.jsx';
import FormPage from '/client/layouts/FormPage.jsx';

import Content from '/client/components/content.jsx';
import Avatars from '/client/components/avatar.jsx';
import BadgePage from '/client/components/badge.jsx';
import ButtonPage from '/client/components/button.jsx';
import LoginPage from '/client/components/login.jsx';
import NotFound from '/client/components/404.jsx';

Subs = new SubsManager();

injectTapEventPlugin();

this.App = {};

//logout function
App.logout = function() {
	Meteor.logout(function(err) {
	});
};

const publicRoutes = FlowRouter.group( { name: 'public' } );
const authenticatedRoutes = FlowRouter.group( { 
    name: 'authenticated',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.userId()) {
            console.log(context)
            redirect('/');
        }
    }] 
});

//All these global subscriptions run on every route. So, pay special attention to names when registering subscriptions.
/*FlowRouter.subscriptions = function() {
  this.register('myTodos', Subs.subscribe('todos'));
};*/
publicRoutes.route("/", {
  name: 'login',
  action () {
    mount(loginLayout, {
     content: () => (
        <LoginPage/>
      )
    });
  }
});

publicRoutes.route("/logout", {
  name: 'logout',
  action () {
     App.logout(); // app logout see client.js
		 FlowRouter.go("/");
  }
});


authenticatedRoutes.route("/dashboard", {
  name: 'dashboard',
  subscriptions: function(params, queryParams) {
      // using Fast Render
      this.register('myTodos', Subs.subscribe('todos'));
  },
  action: () => {
    mount(App, {content: () => ( <Content name="Al"/>)});
  }
});

authenticatedRoutes.route("/avatar", {
   action: () => {
    mount(App, {content: () => ( <Avatars name="Al"/>)});
   }
});

authenticatedRoutes.route("/form", {
   action: () => {
    mount(App, {content: () => ( <FormPage/>)});
   }
});


authenticatedRoutes.route("/badge", {
   action: () => {
    mount(App, {content: () => ( <BadgePage name="Al"/>)});
   }
});

authenticatedRoutes.route("/button", {
   action: () => {
    mount(App, {content: () => ( <ButtonPage name="Al"/>)});
   }
});

publicRoutes.notFound = {
  action () {
    mount(notfoundLayout, {
       content: () => (
          <NotFound/>
        )
    });
  }
};

/*FlowRouter.route("/*", {
  action () {
    mount(notfoundLayout, {
       content: () => (
          <NotFound/>
        )
    });
  }
});*/


