import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import HistoryPage from '../src/pages/HistoryPage'
import PageNotFound from '../src/pages/PageNotFound'
import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/history" exact={true} component={HistoryPage} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}
