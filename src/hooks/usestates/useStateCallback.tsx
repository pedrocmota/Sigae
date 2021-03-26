import {useState, useCallback, useEffect, useRef, SetStateAction, } from 'react'

type Callback<T> = (value?: T) => void
type DispatchWithCallback<T> = (value: T, callback?: Callback<T>) => void

function useStateCallback<T>(initialState: T | (() => T)): [T, DispatchWithCallback<SetStateAction<T>>] {
  const [state, custumSetState] = useState(initialState)

  const callbackRef = useRef<Callback<T>>()
  const isFirstCallbackCall = useRef<boolean>(true)

  const setState = useCallback((setStateAction: SetStateAction<T>, callback?: Callback<T>): void => {
    callbackRef.current = callback
    custumSetState(setStateAction)
  }, [])

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false
      return
    }
    callbackRef.current?.(state)
  }, [state])

  return [state, setState]
}

export default useStateCallback
