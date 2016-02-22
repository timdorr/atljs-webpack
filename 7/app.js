import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <h1>Welcome to the {this.props.section} section!</h1>
    )
  }
}
