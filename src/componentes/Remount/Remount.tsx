import React, {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

interface IRemountContext {
  keyMount: string,
  remount: () => void
}

interface IRemount {
  inContainer?: boolean
}

export const RemountContext = createContext<IRemountContext>({} as IRemountContext)

const Remount: React.FC<IRemount> = (props) => {
  const [keyMount, setKeyMount] = useState(uuidv4())
  const remount = () => setKeyMount(uuidv4())
  return (
    <RemountContext.Provider value={{keyMount, remount}}>
      {!props.inContainer && (
        props.children
      )}
      {props.inContainer && (
        <div key={keyMount}>
          {props.children}
        </div>
      )}
    </RemountContext.Provider>
  )
}

export default Remount