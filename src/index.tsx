import React from 'react'
import ReactDOM from 'react-dom'

import {ToastProvider} from 'react-toast-notifications'
import {APIProvider} from './hooks/APIProvider'
import {TemaProvider} from './hooks/TemaProvider'
import {LoadingProvider} from './hooks/LoadingProvider'

import Routes from './Routes'

ReactDOM.render(
  <ToastProvider autoDismiss={true} autoDismissTimeout={2500}>
    <APIProvider>
      <TemaProvider>
        <LoadingProvider>
          <Routes />
        </LoadingProvider>
      </TemaProvider>
    </APIProvider>
  </ToastProvider>,
  document.getElementById('root')
)