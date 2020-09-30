import React, { } from "react"
import { BrowserRouter, Switch, Route, } from 'react-router-dom'

// import Header from "./Header/Header";
import Home from "../pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <div>
                <Switch>
                    {/* <Route path="/get-started" component={SetupPage} /> */}
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;