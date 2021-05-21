import React, {memo, useContext} from 'react'
import {Container} from './styles'
import {MainContext} from '../../Main'
import '../Hamburguer/hamburger.css'

const Hamburguer: React.FC = () => {
  const {openSidebar, setOpenSidebar} = useContext(MainContext)
  return (
    <Container data-activates="slide-out" className="button-collapse">
      <div className={
        `hamburger hamburger--collapse js-hamburger
        ${openSidebar ? 'is-active' : ''}
      `} onClick={() => {
          setOpenSidebar(!openSidebar)
        }}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </Container>
  )
}

export default memo(Hamburguer)