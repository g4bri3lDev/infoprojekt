import React, {Component} from 'react'

class Titlebarclock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    render() {
        return (
            <h3>{this.state.time.toLocaleTimeString()}</h3>
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