import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Home from './pages/home/home'
import Edit from './pages/edit/eidt'
import Add from './pages/add/add'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/add">
                        <Add/>
                    </Route>
                    <Route path="/edit">
                        <Edit/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}


export default App