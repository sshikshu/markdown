import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import '@blueprintjs/core/dist/blueprint.css'

import * as stores from './store'
import { AppRouter } from './AppRouter'
import './index.css'

const root = document.getElementById('root') as HTMLElement
ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>,
    root
)
