import SessionRequests from './session/Session'
import RegistroRequests from './registro/Registro'
import {IRequests} from './RequestsInterface'

const Requests: IRequests = {
  session: SessionRequests,
  registro: RegistroRequests
}

export default Requests