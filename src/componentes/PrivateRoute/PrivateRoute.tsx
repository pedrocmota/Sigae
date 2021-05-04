import React, {useContext} from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import {APIContext} from '../../hooks/APIProvider'

const PrivateRoute: React.FC<RouteProps> = ({...props}) => {
  const {tokenExist} = useContext(APIContext)
  if(tokenExist()) {
    return (
      <Route {...props}>
      </Route>
    )
  } else {
    return (
      <Redirect to="/login"/>
    )
  }
}

export default PrivateRoute