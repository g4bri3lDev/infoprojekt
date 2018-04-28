import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Titlebarclock from './Titlebarclock'

class Titlebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
    return (
      <div className="Titlebar">
       <AppBar
           title='Indoor Nav'
           iconElementRight={<Titlebarclock/>}
           onLeftIconButtonClick={this.handleMenu}
       />
      </div>
    )
  }
}

export default Titlebar
