import * as React from 'react'
import { inject, observer } from 'mobx-react'
import MonacoEditor from 'react-monaco-editor'
import { Button } from '@blueprintjs/core'

import { DashboardStore } from '../store/dashboard.store'
import { debounce } from '../utils'

interface Props {
    dashboardStore: DashboardStore
}
interface State {}

@inject('dashboardStore')
@observer
export class DashboardPage extends React.Component<Props, State> {
    addMarkdown = debounce(this.props.dashboardStore.addMarkdown)
    render() {
        return (
            <div className="dashboard-page">
                <header className="app-header">
                    enter markdown below and{' '}
                    <Button className="print-button" onClick={this.props.dashboardStore.convertToPdf}>
                        print
                    </Button>
                </header>
                <MonacoEditor
                    language="markdown"
                    onChange={this.addMarkdown}
                    value={this.props.dashboardStore.markdown}
                />
            </div>
        )
    }
}
