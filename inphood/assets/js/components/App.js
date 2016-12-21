import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import './styles/App.css'
import './styles/custom-styles.css'


export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Featured}></IndexRoute>
          <Route path="archives(/:article)" name="archives" component={Archives}></Route>
          <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
      </Router>
    )
  }
}