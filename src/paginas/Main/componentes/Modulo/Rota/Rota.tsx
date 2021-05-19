import React, {useContext, memo} from 'react'
import {Route, Redirect} from 'react-router-dom'
import ModuloContainer from '../ModuloContainer/ModuloContainer'
import {APIContext} from '../../../../../hooks/APIProvider'
import {useToasts} from 'react-toast-notifications'
import {MainContext} from '../../../Main'
import {ICondicao, validarPermissao} from '../../Permissao'
import {SvgIconComponent} from '@material-ui/icons'

interface IRota {
  rota: string,
  nome: string,
  condicao: ICondicao,
  icone: SvgIconComponent,
  componente: React.FC
}

const Rota: React.FC<IRota> = (props) => {
  const {Token} = useContext(APIContext)
  const {dados} = useContext(MainContext)
  const {addToast} = useToasts()
  const path = props.rota == '/' ? '/' : `/modulo${props.rota}`
  const valido = validarPermissao(Token.existe(), props.condicao, dados!)
  if(!valido) {
    addToast('Você não tem permissão para acessar esse módulo', {appearance: 'error'})
  }
  return (
    <>
      {valido && (
        <Route path={path} exact>
          <ModuloContainer {...props}/>
        </Route>
      )}
      {!valido && (
        <Redirect to="/"/>
      )}
    </>
  )
}

export default memo(Rota)