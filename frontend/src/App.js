import React, {Component} from 'react'
import MaterialUIThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import Titlebar from './components/titlebar/Titlebar'
import Appdrawer from "./components/drawer/Appdrawer";

class App extends Component {
    handleMenu = () => this.setState({open: !this.state.open})

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="App">
                <MaterialUIThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Titlebar
                    />
                    <Appdrawer open={this.state.open}/>
                </MaterialUIThemeProvider>
            </div>
        )
    }
}

export default App
