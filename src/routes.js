import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import Clients from './pages/Clients'
import RegisterClient from './pages/RegisterClient'

import Main from './components/Main'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Main>
          <Route path="/" exact component={Home} />
          <Route path="/clients" exact component={Clients} />
          <Route path="/clients/add" exact component={RegisterClient} />
        </Main>
      </Switch>
    </BrowserRouter>
  )
}
