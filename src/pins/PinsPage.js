import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'
import PinsStatuses from './PinsStatuses'

const PinsPage = ({ pendingPins, failedPins }) => {
  return (
    <div data-id='PinsPage' className='mw9 center'>
      <Helmet>
        <title>Pins Status</title>
      </Helmet>

      <PinsStatuses pendingPins={pendingPins} failedPins={failedPins} />
    </div>
  )
}

export default connect(
  'selectPendingPins',
  'selectFailedPins',
  withTranslation('files')(PinsPage)
)
