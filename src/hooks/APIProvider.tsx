import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import usePeristedState from './usestates/usePeristedState'
import Requests from '../requests/Requests'
import {isDev, fixRoute, parseToNumber} from '../utils/Utils'
import Crash, {ICrash} from '../componentes/pages/Crash/Crash'
import {IMethods, IRequests} from '../requests/RequestsInterface'

interface IAPIContext {
  endereco: string,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  // apiError: number,
  // setAPIError: React.Dispatch<React.SetStateAction<number>>,
  Requests: IRequests
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods:IMethods

export const APIProvider: React.FC = (props) => {
  const [token, setToken] = usePeristedState('token', '')
  const [endereco, setEndereco] = useState('')
  const [crash, setCrash] = useState<ICrash | null>(null)
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
      axios.post(`${endereco}${fixRoute(route)}`, data, {
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta: any) => {
        const code = resposta.headers.statuscode
        if(code == undefined) {
          callbackOk(resposta.data)
        } else {
          if(callbackError != undefined) callbackError(resposta.data, parseToNumber(code))
        }
      }).catch((erro) => {
        crashApp(erro.response)
      })
    },
    
    get: async (route, data, auth, callbackOk, callbackError) => {
      axios.get(`${endereco}${fixRoute(route)}`, {
        params: data,
        headers: {
          'token': auth ? token : null
        }
      }).then((resposta:any) => {
        const code = resposta.headers.statuscode
        if(code == undefined) {
          callbackOk(resposta.data)
        } else {
          if(callbackError != undefined) callbackError(resposta.data, parseToNumber(code))
        }
      }).catch((erro) => {
        crashApp(erro.response)
      })
    }
  }

  const crashApp = (erro: any) => {
    if(erro == undefined) {
      return setCrash({statusCode: '404', texto: 'Não foi possível contatar a API'})
    }
    if(typeof erro.data == 'object') {
      const dataString = Object.entries(erro.data)[0][1] as any
      setCrash({statusCode: erro.status, texto: dataString})
    } else {
      return setCrash({statusCode: erro.status, texto: erro.data})
    }
  }

  if(crash != null) {
    return (
      <Crash statusCode={crash.statusCode} texto={crash.texto}/>
    )
  }

  return (
    <APIContext.Provider value={{
      endereco, token, setToken, isAuth, resetAuth, Requests
    }}>
      {props.children}
    </APIContext.Provider>
  )
}