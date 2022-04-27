import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'
import DocumentIcon from '../icons/GlyphDocGeneric'

const Pin = (pin) => {
  const [service, cid] = pin.split(':')

  return (<li className="flex w-100 bb b--light-gray items-center f6 charcoal" key={cid}>
    <DocumentIcon className="fileImportStatusIcon fill-aqua pa1 w1" />
    <span className="truncate">{cid}</span>
    <span className='gray mh2'>{service}</span>
  </li>)
}

const PinsPage = ({ pendingPins, failedPins }) => {
  return (
    <div data-id='PinsPage' className='mw9 center'>
      <Helmet>
        <title>Pins Status</title>
      </Helmet>

      <div>
        <h2>Pins Status</h2>

        <ul className='pa0 ma0'>
          {pendingPins.map(pin => Pin(pin))}
          {failedPins.map(pin => Pin(pin))}
        </ul>
      </div>
    </div>
  )
}

export default connect(
  'selectPendingPins',
  'selectFailedPins',
  withTranslation('files')(PinsPage)
)
