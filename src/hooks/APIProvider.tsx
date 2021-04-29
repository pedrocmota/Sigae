import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import usePeristedState from './usestates/usePeristedState'
import Requests from '../requests/Requests'
import {isDev, fixRoute, parseToNumber} from '../utils/Utils'
import {IMethods, IRequests} from '../requests/RequestsInterface'

export interface IAPIContext {
  endereco: string,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  Requests: IRequests
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods: IMethods

export const APIProvider: React.FC = (props) => {
  const [token, setToken] = usePeristedState('token', '')
  const [endereco, setEndereco] = usePeristedState('api_adress', '')
  useEffect(() => {
    if (endereco == '') {
      console.log('adress')
      const loading = async () => {
        const adress = isDev() ? '/api.adress.json' : '/public/api.adress.json'
        const dados = await (await axios.get(adress)).data
        setEndereco(dados['adress'])
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
      axios.post(`${endereco}${fixRoute(route)}`, data, {
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
        // crashApp(erro.response)
      })
    },

    get: async (route, data, auth, callbackOk, callbackError) => {
      axios.get(`${endereco}${fixRoute(route)}`, {
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
        // crashApp(erro.response)
      })
    }
  }

  return (
    <APIContext.Provider value={{
      endereco, token, setToken, isAuth, resetAuth, Requests
    }}>
      {endereco.length > 0 && (
        props.children
      )}
    </APIContext.Provider>
  )
}