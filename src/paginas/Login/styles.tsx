import styled from 'styled-components'
import ErrorIcon from '@material-ui/icons/Error'
import {ReactComponent as SpinnerSVG} from '../../assets/spinner.svg'

export const Container = styled.div`
  width: 100vw;
  height:100vh;
  background: linear-gradient(rgb(96, 108, 136), rgb(64, 77, 108));
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  width: 720px;
  height: 538px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 780px) {
    width: 100%;
    height: 100%;
  } 
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    white-space: nowrap;
    font-size: 20px;
    text-align: center;
    color: rgb(84, 113, 156);
    font-weight: 500 !important;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-top: 20px;
  flex: 1;
  margin-bottom: 40px;
  padding-top: 20px;
  @media (max-width: 780px) {
    width: 80%;
    margin-bottom: 0px;
    margin-top: 50px;
  }
  @media (max-width: 400px) {
    width: 85%;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  @media (max-width: 436px) {
    flex-direction: column;
    justify-content: center;
    .leftLink {
      margin-top: 25px;
      display: inline-flex;
    }
    .rightLink {
      margin-top: 25px;
      display: inline-flex;
    }

  }
`

export const LinksColuna = styled.div`
  text-align: center;
`

export const LinksRow = styled.div`
  position: relative;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  color: slategray;
  user-select: none;
  transition: color 0.7s;
  a {
    color: unset !important;
    text-decoration: none !important;
  }
  &:hover {
    color: rgb(73, 71, 219);
    cursor: pointer;
    padding-bottom: 2px;
  }
  &:after {
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    content: "";
    background: none repeat scroll 0 0 transparent;
    background: rgb(100, 98, 240);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  &:hover:after {
    position: absolute;
    width: 100%;
    left: 0;
  }
  @media (max-width: 436px) {
    font-size: 20px;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #d4d7da;
  div {
    font-weight: 500;
    color: #364458;
    a {
      color: #147914;
      text-decoration: none;
      &:hover {
        color: #2fa82f;
        text-decoration: underline;
      }
    }
  }
`

interface IIconeError {
  visible: number
}

export const IconeError = styled(ErrorIcon)<IIconeError>`
  position: absolute;
  width: 30px !important;
  height: 100% !important;
  left: 6px;
  bottom: 1px;
  color: crimson;
  opacity: ${props => props.visible};
  transition: opacity 200ms !important;
`

export const Spinner = styled(SpinnerSVG)`
  color: white;
  width: 30px;
  height: 30px;
`