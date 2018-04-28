import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import {MenuItem} from "material-ui";

class Appdrawer extends Component {

    render() {
        return (
            <div>
                <Drawer
                    open={this.props.open}>
                    <MenuItem>
                        M 1
                    </MenuItem>
                    <MenuItem>
                        M 2
                    </MenuItem>
                    <MenuItem>
                        M 3
                    </MenuItem>

                </Drawer>
            </div>
        )
    }

}

export default Appdrawer