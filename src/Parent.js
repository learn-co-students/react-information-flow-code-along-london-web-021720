import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColour: '#FFF'
    }
  }

  changeColour = (newChildColour) => {
    this.setState({
      color: getRandomColor(),
      childrenColour: newChildColour
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child colour={this.state.childrenColour} handleColourChange={this.changeColour}/>
        <Child colour={this.state.childrenColour} handleColourChange={this.changeColour}/>
      </div>
    )
  }
}

export default Parent
