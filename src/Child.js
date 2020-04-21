import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.colour}}
        onClick={() => this.props.handleColourChange(getRandomColor())}
      ></div>
    )
  }
}

export default Child
