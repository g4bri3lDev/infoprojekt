import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import MaterialUIThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import './AppCSS.css'
import Titlebar from './components/titlebar/Titlebar'
import Appdrawer from "./components/drawer/Appdrawer";
import Home from './components/pages/Home'
import Mappage from './components/pages/Mappage'
import Navpage from './components/pages/Navpage'
import Dev from './components/pages/dev/Dev'


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
            <HashRouter>
                <div className="App">
                    <MaterialUIThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <Titlebar trigger={this.handleMenu}
                        />
                        <Appdrawer open={this.state.open} trigger={this.handleMenu}/>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/map" component={Mappage}/>
                            <Route path="/nav" component={Navpage}/>
                            <Route path="/dev" component={Dev}/>
                        </div>
                    </MaterialUIThemeProvider>
                </div>
            </HashRouter>
        )
    }
}

export default App
