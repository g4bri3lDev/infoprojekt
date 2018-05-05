import React, {Component} from 'react'
import Cam from './Cam'
import Modify from './Modify'
import './DevCSS.css'
import Backendstatus from "./Backendstatus";

class Dev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onlineMessage: 'offline'
        }
    }

    render() {
        return (
            <div>
                <Backendstatus/>
                <Cam/>
                <Modify/>
            </div>
        )
    }
}

export default Dev