import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

class Backendstatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onlineMessage: 'Backend is offline'
        }
    }

    render() {
        return (
            <div className="frame">
                <Paper className="paper">
                    {this.state.onlineMessage}
                </Paper>
            </div>
        )
    }

    componentDidMount() {
        fetch('/online')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    onlineMessage: data.online
                })
            })
    }
}

export default Backendstatus