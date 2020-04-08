import React from 'react'

import Home from './pages/home/home'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    render () {
        return (
            <div className="container">
                <Home />
            </div>
        )
    }
}

export default App