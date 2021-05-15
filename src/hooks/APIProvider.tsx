import React, {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios'
import usePeristedState from './usestates/usePeristedState'
import Requests from '../requests/Requests'
import {useToasts} from 'react-toast-notifications'
import {ConsoleContext} from '../hooks/ConsoleProvider'
import {isDev, fixRoute, parseToNumber} from '../utils/Utils'
import Crash, {ICrash} from '../paginas/Crash/Crash'
import {IMethods, IRequests} from '../requests/RequestsInterface'
import {IEnv, ITokenObject} from '../types/APIProvider'

export interface IAPIContext {
  env: IEnv,
  Token: ITokenObject,
  Requests: IRequests
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export let Methods: IMethods

export const APIProvider: React.FC = (props) => {
  const [env, setEnv] = usePeristedState<IEnv | null | undefined>('env', null)
  const [token, setToken] = usePeristedState('token', '')
  const [crash, setCrash] = useState<ICrash>()
  
  const {adicionar} = useContext(ConsoleContext)
  const {addToast} = useToasts()

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
          setCrash({
            titulo: 'Erro de configuração',
            texto: 'Não foi possível localizar a .env'
          })
        })
      }
      loading()
    }
  }, [])

  const Token:ITokenObject = {
    valor: token,
    existe: () => {
      return token.length > 0
    },
    definir: (valor: string) => {
      setToken(valor)
    },
    remover: () => {
      return setToken('')
    }
  }

  Methods = {
    post: async (route, data, auth, callbackOk, callbackError) => {
      axios.post(`${(env as IEnv).apiAdress}${fixRoute(route)}`, data, {
        headers: {
          ...(auth && {token: token}),
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
          ...(auth && {token: token}),
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
      env: env as IEnv, Token, Requests
    }}>
      {env != null && crash == undefined && (
        props.children
      )}
      {env === undefined && crash != undefined && (
        <Crash {...crash}/>
      )}
    </APIContext.Provider>
  )
}