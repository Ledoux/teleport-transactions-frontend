import { createViewer } from 'transactions-interface-state'
import { Confirmation,
  Warning
} from 'transactions-interface-web'

const modalViewer = createViewer('modal', { ConfirmationModal: Confirmation, 
  WarningModal: Warning
})

export default modalViewer
