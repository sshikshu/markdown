import { useStrict } from 'mobx'

import { DashboardStore } from './dashboard.store'

useStrict(true)

export const dashboardStore = new DashboardStore()
