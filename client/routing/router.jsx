import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import Content from '/client/components/content.jsx';
import Avatars from '/client/components/avatar.jsx';
import BadgePage from '/client/components/badge.jsx';

FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
     content: () => (
        <Content name="Ethan"/>
      )
    });
  }
});

FlowRouter.route("/avatar", {
  action () {
    mount(MainLayout, {
     content: () => (
        <Avatars name="Ethan"/>
      )
    });
  }
});

FlowRouter.route("/badge", {
  action () {
    mount(MainLayout, {
     content: () => (
        <BadgePage name="Ethan"/>
      )
    });
  }
});