import React from 'react'
import ReactDOM from 'react-dom'

import {ToastProvider} from 'react-toast-notifications'
import {APIProvider} from './hooks/APIProvider'
import {ThemeProvider} from './hooks/ThemeProvider'
import {PopupProvider} from './hooks/PopupProvider'
import {ConsoleProvider} from './hooks/ConsoleProvider'

import Routes from './Routes'

ReactDOM.render(
  <ThemeProvider>
    <ConsoleProvider>
      <ToastProvider autoDismiss={true} autoDismissTimeout={4500}>
        <APIProvider>
          <PopupProvider>
            <Routes />
          </PopupProvider>
        </APIProvider>
      </ToastProvider>
    </ConsoleProvider>
  </ThemeProvider>,
  document.getElementById('root')
)