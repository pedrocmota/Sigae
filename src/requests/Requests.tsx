import SessionRequests from './session/Session'
import RegistroRequests from './registro/Registro'
import MailRequests from './mail/Mail'
import {IRequests} from './RequestsInterface'

const Requests: IRequests = {
  session: SessionRequests,
  registro: RegistroRequests,
  mail: MailRequests
}

export default Requests