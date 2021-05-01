import React, {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios'
import usePeristedState from './usestates/usePeristedState'
import Requests from '../requests/Requests'
import {ConsoleContext} from '../hooks/ConsoleProvider'
import {isDev, fixRoute, parseToNumber} from '../utils/Utils'
import {IMethods, IRequests} from '../requests/RequestsInterface'

export interface IAPIContext {
  env: IEnv,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  Requests: IRequests
}

interface IEnv {
  apiAdress: string
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods: IMethods

export const APIProvider: React.FC = (props) => {
  const {adicionar} = useContext(ConsoleContext)
  const [env, setEnv] = usePeristedState<IEnv | null | undefined>('env', null)
  const [token, setToken] = usePeristedState('token', '')

  useEffect(() => {
    if (env == null) {
      const loading = async () => {
        const adress = isDev() ? '/env.json' : '/public/env.json'
        axios.get(adress)
        .then((data) => {
          setEnv(data.data)
        })
        .catch(() => {
          setEnv(undefined)
        })
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
      axios.post(`${(env as IEnv).apiAdress}${fixRoute(route)}`, data, {
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
      axios.get(`${(env as IEnv).apiAdress}${fixRoute(route)}`, {
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
      env: env as IEnv, token, setToken, isAuth, resetAuth, Requests
    }}>
      {env != null && env != undefined && (
        props.children
      )}
      {env === undefined && (
        <h1>Não foi possível carregar o arquivo .env</h1>
      )}
    </APIContext.Provider>
  )
}