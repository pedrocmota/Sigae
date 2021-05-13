import SessionRequests from './session/Session'
import DadosRequests from './dados/Dados'
import RegistroRequests from './registro/Registro'
import MailRequests from './mail/Mail'
import {IRequests} from './RequestsInterface'

const Requests: IRequests = {
  session: SessionRequests,
  dados: DadosRequests,
  registro: RegistroRequests,
  mail: MailRequests
}

export default Requests