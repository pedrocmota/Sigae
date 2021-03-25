import {useState, useEffect, Dispatch, SetStateAction} from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T | (() => T)): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)
    const inicial = typeof initialState == 'function' ? (initialState as Function)() : initialState
    return storageValue ? JSON.parse(storageValue) : inicial
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState