import React, { Component } from 'react'
import MaterialUIThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBlack } from 'material-ui/styles/colors';
import Titlebar from './components/titlebar/Titlebar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <MaterialUIThemeProvider muiTheme={getMuiTheme(darkBlack)}>
          <Titlebar></Titlebar>
        </MaterialUIThemeProvider>
      </div>
    )
  }
}

export default App
