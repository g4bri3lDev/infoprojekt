import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Titlebarclock from './Titlebarclock'

class Titlebar extends Component {

    render() {
        // noinspection JSUnresolvedVariable
        return (
            <div className="Titlebar">
                <AppBar
                    title='Indoor Nav'
                    iconElementRight={<Titlebarclock/>}
                    onLeftIconButtonClick={this.props.trigger}
                />
            </div>
        )
    }
}

export default Titlebar
