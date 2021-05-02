import React, {useContext} from 'react'
import {Container} from './styles'
import {MainContext} from '../../Main'
import '../Hamburguer/hamburger.css'

const Hamburguer: React.FC = () => {
  const {open, setOpen} = useContext(MainContext)
  return (
    <Container data-activates="slide-out" className="button-collapse">
      <div className={
        `hamburger hamburger--collapse js-hamburger
        ${open ? 'is-active' : ''}
      `} onClick={() => {
          setOpen(!open)
          // document.getElementById('hamburguer')?.classList.add('is-active')
        }}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </Container>
  )
}

export default Hamburguer