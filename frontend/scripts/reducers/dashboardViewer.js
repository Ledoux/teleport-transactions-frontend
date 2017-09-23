import { createViewer } from 'transactions-interface-state'

import { DashboardComponentsByComponentsName } from '../react/dashboards'

const dashboardViewer = createViewer('dashboard', DashboardComponentsByComponentsName)

export default dashboardViewer
