import React, { Component } from 'react'
import logo from '../data/logo.svg'
import './styles/App.css'

// import 'bootstrap/less/bootstrap.less'
import './styles/custom-styles.css'

import HeaderNavigation from './HeaderNavigation'
import Body from './Body'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavigation />
        <Body />
        <Footer />
      </div>
    )
  }
}