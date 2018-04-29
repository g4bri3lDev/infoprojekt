import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import {MenuItem} from "material-ui";

class Appdrawer extends Component {

    render() {
        return (
            <div>
                <Drawer
                    open={this.props.open}>
                    <NavLink to="/" onClick={this.props.trigger}>
                        <MenuItem>
                            Home
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/map" onClick={this.props.trigger}>
                        <MenuItem>
                            Map
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/nav" onClick={this.props.trigger}>
                    <MenuItem>
                        Navigation
                    </MenuItem>
                    </NavLink>
                    <NavLink to="/dev" onClick={this.props.trigger}>
                        <MenuItem>
                            Dev
                        </MenuItem>
                    </NavLink>
                    <NavLink to="#" onClick={this.props.trigger}>
                        <MenuItem>
                            Close
                        </MenuItem>
                    </NavLink>

                </Drawer>
            </div>
        )
    }

}

export default Appdrawer