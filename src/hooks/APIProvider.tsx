import React, {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios'
import usePeristedState from './usestates/usePeristedState'
import Requests from '../requests/Requests'
import {ConsoleContext} from '../hooks/ConsoleProvider'
import {isDev, fixRoute, parseToNumber} from '../utils/Utils'
import {IMethods, IRequests} from '../requests/RequestsInterface'

export interface IAPIContext {
  config: IConfig,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  Requests: IRequests
}

interface IConfig {
  version: string,
  apiAdress: string
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods: IMethods

export const APIProvider: React.FC = (props) => {
  const {adicionar} = useContext(ConsoleContext)
  const [token, setToken] = usePeristedState('token', '')
  const [config, setConfig] = useState<IConfig>()

  useEffect(() => {
    if (config == undefined) {
      const loading = async () => {
        const adress = isDev() ? '/app.config.json' : '/public/app.config.json'
        const dados = await (await axios.get(adress)).data
        setConfig(dados)
      }
      loading()
    }
  }, [])

  const isAuth = () => {
    return token.length > 0
  }

  const resetAuth = () => {
    return setToken('')
  }

  Methods = {
    post: async (route, data, auth, callbackOk, callbackError) => {
      axios.post(`${config?.apiAdress}${fixRoute(route)}`, data, {
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta: any) => {
        const code = resposta.headers.statuscode
        if (code == undefined) {
          callbackOk(resposta.data)
        } else {
          if (callbackError != undefined) callbackError(resposta.data, parseToNumber(code))
        }
      }).catch((erro) => {
        adicionar('Erro de rede.', erro + '', 'ERROR')
      })
    },

    get: async (route, data, auth, callbackOk, callbackError) => {
      axios.get(`${config?.apiAdress}${fixRoute(route)}`, {
        params: data,
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta: any) => {
        const code = resposta.headers.statuscode
        if (code == undefined) {
          callbackOk(resposta.data)
        } else {
          if (callbackError != undefined) callbackError(resposta.data, parseToNumber(code))
        }
      }).catch((erro) => {
        adicionar('Erro de rede.', erro + '', 'ERROR')
      })
    }
  }

  return (
    <APIContext.Provider value={{
      config: config as IConfig, token, setToken, isAuth, resetAuth, Requests
    }}>
      {config != undefined && (
        props.children
      )}
    </APIContext.Provider>
  )
}