import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Home from './pages/home/home'
import EditTodo from './pages/edit-todo/eidt-todo'
import NotFound from './pages/not-found/not-found'
import History from './pages/history/history'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    render () {
        const basename = '/webapp'
        return (
        <Router basename={basename}>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/add">
                    <EditTodo/>
                </Route>
                <Route path="/edit">
                    <EditTodo/>
                </Route>
                <Route path="/history">
                    <History/>
                </Route>
                <Route path="/">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
        )
    }
}


export default App