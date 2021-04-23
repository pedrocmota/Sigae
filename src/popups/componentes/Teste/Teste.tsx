import React from 'react'
import {IPopupBody} from '../../../popups/PopupsInterface'

import BasicSelect from '../../../componentes/selects/BasicSelect/BasicSelect'

const Teste: React.FC<IPopupBody> = () => {
  return (
    <div>
      <BasicSelect placeholder="teste" options={
        [
          '1',
          '2',
          '3',
          '1',
          '2',
          '3',
          '1',
          '2',
          '3',
          '1',
          '2',
          '3',
          '1',
          '2',
          '3',
          '1',
          '2',
          '3',
        ]
      } />
    </div>
  )
}

export default Teste