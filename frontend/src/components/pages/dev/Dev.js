import React, {Component} from 'react'
import GeneralService from '../../../services/GeneralService'
import Cam from './Cam'
import Modify from './Modify'
import './DevCSS.css'

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
                <Cam/>
                <Modify/>
                <b>{this.state.onlineMessage}</b>

            </div>
        )
    }

    componentDidMount() {
        fetch('/online')
            .then(function (resx) {
                console.log(resx)
            })
    }

}

export default Dev