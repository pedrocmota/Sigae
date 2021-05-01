import React, {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios'
import usePeristedState from './usestates/usePeristedState'
import Requests from '../requests/Requests'
import {ConsoleContext} from '../hooks/ConsoleProvider'
import {isDev, fixRoute, parseToNumber} from '../utils/Utils'
import {IMethods, IRequests} from '../requests/RequestsInterface'

export interface IAPIContext {
  APIAdress: string,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  Requests: IRequests
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods: IMethods

export const APIProvider: React.FC = (props) => {
  const {adicionar} = useContext(ConsoleContext)
  const [token, setToken] = usePeristedState('token', '')
  const [APIAdress, setAPIAdress] = usePeristedState('api_adress', '')
  const [adressError, setAdressError] = useState(false)

  useEffect(() => {
    if (APIAdress == '') {
      const loading = async () => {
        const adress = isDev() ? '/api.adress.json' : '/public/api.adress.json'
        const dados = await (await axios.get(adress)).data
        if(dados.apiAdress == undefined || typeof dados.apiAdress != 'string' || dados.apiAdress == '') {
          return setAdressError(true)
        }
        setAPIAdress(dados.apiAdress)
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
      axios.post(`${APIAdress}${fixRoute(route)}`, data, {
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
      axios.get(`${APIAdress}${fixRoute(route)}`, {
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
      APIAdress: APIAdress as string, token, setToken, isAuth, resetAuth, Requests
    }}>
      {APIAdress != '' && (
        props.children
      )}
      {adressError && (
        <h1>O caminho da API não foi configurado</h1>
      )}
    </APIContext.Provider>
  )
}