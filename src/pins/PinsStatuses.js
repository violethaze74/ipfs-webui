import React from 'react'
import { withTranslation } from 'react-i18next'
import DocumentIcon from '../icons/GlyphDocGeneric'
import GlyphPinCloud from '../icons/GlyphPinCloud'
import '../files/file/PendingAnimation.css'

const Pin = (pin, failed) => {
  const [service, cid] = pin.split(':')

  return (<li className="flex w-100 bb b--light-gray items-center f6 charcoal" key={cid}>
    <DocumentIcon className="fill-aqua pa1 w1" style={{ width: '36px' }} />
    <span className="truncate">{cid}</span>
    <span className='gray mh2'>| {service}</span>
    <span className='br-100 o-70 ml-auto' style={{ width: '2rem', height: '2rem' }}>
      <GlyphPinCloud className={`fill-${failed ? 'red' : 'aqua PendingAnimation'}`} />
    </span>
  </li>)
}

const PinsStatuses = ({ pendingPins, failedPins }) => {
  return (
    <div>
      <h2>Pins Status</h2>

      <ul className='pa0 ma0'>
        {pendingPins.map(pin => Pin(pin))}
        {failedPins.map(pin => Pin(pin, true))}
      </ul>
    </div>
  )
}

export default withTranslation('files')(PinsStatuses)
