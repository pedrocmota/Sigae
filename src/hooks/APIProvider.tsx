import React, {useState, useEffect, createContext} from 'react'
import usePeristedState from './usestates/usePeristedState'
import axios from 'axios'
import isDev from '../utils/DevDetect'
import Requests from '../requests/Requests'
import {IMethods, IRequests} from '../requests/RequestsInterface'

interface IAPIContext {
  endereco: string,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  apiError: boolean,
  setAPIError: React.Dispatch<React.SetStateAction<boolean>>,
  Requests: IRequests
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods:IMethods

export const APIProvider: React.FC = (props) => {
  const [token, setToken] = usePeristedState('token', '')
  const [endereco, setEndereco] = useState('')
  const [apiError, setAPIError] = useState(false)
  useEffect(() => {
    const loading = async() => {
      const adress = isDev() ? '/api.adress.json' : '/public/api.adress.json'
      const dados = await (await axios.get(adress)).data
      setEndereco(dados['adress'])
    }
    loading()
  })

  const isAuth = () => {
    return token.length > 0
  }
  const resetAuth = () => {
    return setToken('')
  }

  Methods = {
    post: async (route, data, auth, callbackOk, callbackError) => {
      if (!route.startsWith('/')) route = `/${route}`
      axios.post(`${endereco}${route}`, data, {
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta: any) => {
        if(resposta.data.tokenErro == undefined) {
          callbackOk(resposta.data)
        } else {
          if(callbackError != undefined) callbackError(null)
          requestError(null)
        }
      }).catch((erro) => {
        requestError(erro)
      })
    },
    
    get: async (route, data, auth, callbackOk, callbackError) => {
      if (!route.startsWith('/')) route = `/${route}`
      axios.get(`${endereco}${route}`, {
        params: data,
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta:any) => {
        if(resposta.data.tokenErro == undefined) {
          callbackOk(resposta.data)
        } else {
          if(callbackError != undefined) callbackError(null)
          requestError(null)
        }
      }).catch((erro) => {
        requestError(erro)
      })
    },

    put: async (route, data, auth, callbackOk, callbackError) => {
      if (!route.startsWith('/')) route = `/${route}`
      axios.put(`${endereco}${route}`, data, {
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta: any) => {
        if(resposta.data.tokenErro == undefined) {
          callbackOk(resposta.data)
        } else {
          if(callbackError != undefined) callbackError(null)
          requestError(null)
        }
      }).catch((erro) => {
        requestError(erro)
      })
    },
  }

  const requestError = (erro: any) => {
    
  }

  return (
    <APIContext.Provider value={{
      endereco, token, setToken, apiError, setAPIError, isAuth, resetAuth, Requests
    }}>
      {props.children}
    </APIContext.Provider>
  )
}