import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import isDev from '../utils/DevDetect'

interface IAPIContext {
  endereco: string,
  token: string,
  setToken: Function,
  isAuth: () => boolean,
  resetAuth: () => void,
  apiError: boolean,
  setAPIError: React.Dispatch<React.SetStateAction<boolean>>
}

export const APIContext = createContext<IAPIContext>({} as IAPIContext)

export const APIProvider: React.FC = (props) => {
  const [token, setToken] = useState('')
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

  return (
    <APIContext.Provider value={{
      endereco, token, setToken, apiError, setAPIError, isAuth, resetAuth
    }}>
      {props.children}
    </APIContext.Provider>
  )
}