import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { DashboardPage } from './+dashboard/Dashboard'

export const AppRouter = () => (
    <Switch>
        <Route component={DashboardPage} path="/dashboard" />
        <Redirect from="/" to="/dashboard" />
    </Switch>
)
