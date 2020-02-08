import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import HistoryPage from '../src/pages/HistoryPage'
import CountdownPage from '../src/pages/CountdownPage'
import GaleryPage from '../src/pages/GaleryPage'
import GiftPage from '../src/pages/GiftPage'
import AddressPage from '../src/pages/AddressPage'
import PageNotFound from '../src/pages/PageNotFound'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/history" exact={true} component={HistoryPage} />
                    <Route path="/photos" exact={true} component={GaleryPage} />
                    <Route path="/giftList" exact={true} component={GiftPage} />
                    {/* <Route path="/sendMessage" exact={true} component={MessagePage} /> */}
                    <Route path="/countdown" exact={true} component={CountdownPage} />
                    <Route path="/address" exact={true} component={AddressPage} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}
