import React, {useState, createContext} from 'react'
import Loading from '../componentes/Loading/Loading'

interface ILoadingContext {
  isShow: boolean,
  showLogin: () => void,
  hideLogin: (timer?: number) => void
}

export const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext)

export const LoadingProvider: React.FC = (props) => {
  const [isShow, setShow] = useState(true)
  const showLogin = () => {
    setShow(true)
  }
  const hideLogin = (timer = 500) => {
    setTimeout(() => {
      setShow(false)
    }, timer)
  }
  return (
    <LoadingContext.Provider value={{isShow, showLogin, hideLogin}}>
      <Loading visible={isShow}/>
      {props.children}
    </LoadingContext.Provider>
  )
}