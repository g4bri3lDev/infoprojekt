import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class Titlebar extends Component {
  render () {
    return (
      <div className="Titlebar">
       <AppBar
       title='Indoor Nav'
       ></AppBar>
      </div>
    )
  }
}

export default Titlebar
