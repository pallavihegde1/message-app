import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/home';
import MessageList from './Components/message-list';

export const routes = () => {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/message_list" component={MessageList} />
    </Switch>
  );
}
