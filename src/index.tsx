import React from 'react'
import ReactDOM from 'react-dom'

import {APIProvider} from './hooks/APIProvider'
import {TemaProvider} from './hooks/TemaProvider'
import {LoadingProvider} from './hooks/LoadingProvider'

import Routes from './Routes'

ReactDOM.render(
  <APIProvider>
    <TemaProvider>
      <LoadingProvider>
        <Routes />
      </LoadingProvider>
    </TemaProvider>
  </APIProvider>,
  document.getElementById('root')
)