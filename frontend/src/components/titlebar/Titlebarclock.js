import React, {Component} from 'react'
import FlatButton from "material-ui/FlatButton";


class Titlebarclock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    render() {
        return (
            <FlatButton
                label={this.state.time.toLocaleTimeString()}/>

        )
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }
}

export default Titlebarclock