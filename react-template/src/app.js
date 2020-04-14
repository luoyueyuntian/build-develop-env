import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Home from './pages/home/home'
import EditTodo from './pages/edit-todo/eidt-todo'

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
                        <EditTodo/>
                    </Route>
                    <Route path="/edit">
                        <EditTodo/>
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