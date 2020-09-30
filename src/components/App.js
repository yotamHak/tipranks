import React, { } from "react"
import { BrowserRouter, Switch, Route, } from 'react-router-dom'

import Home from "../pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;