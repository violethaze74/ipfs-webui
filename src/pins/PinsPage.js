import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'redux-bundler-react'
import { withTranslation } from 'react-i18next'

const PinsPage = () => {
  return (
    <div data-id='PinsPage' className='mw9 center'>
      <Helmet>
        <title>Pins Page</title>
      </Helmet>

      <div>
        TODO
      </div>
    </div>
  )
}

export default connect(
  withTranslation('files')(PinsPage)
)
