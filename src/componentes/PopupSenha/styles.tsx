import styled from 'styled-components'
import Fade from '../../componentes/Fade/Fade'

export const FadeContainer = styled(Fade)`
  position: absolute;
  width: 320px;
  height: 170px;
  left: -340px;
  top: -14px;
  padding: 10px;
  padding-right: 15px;
  background-color: #fdfdfd;
  border: 1px solid #b1b1b1;
  box-shadow: 7px 7px 5px -4px rgb(69 56 69 / 19%);
  &:after {
    content: '';
    border-top: 1px solid #b1b1b1;
    border-right: 1px solid #b1b1b1;
    background-color: #fdfdfd;
    position: absolute;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    right: -11px;
    top: 33px;
    box-shadow: 0 -5px 5px -5px rgb(69 56 69 / 19%);
    box-shadow: 5px 0 5px -5px rgb(69 56 69 / 19%);
  }
`

interface IInternalContainer {
  color: string
}

export const InternalContainer = styled.div<IInternalContainer>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .top {
    margin-bottom: 10px;
    .forcaTexto {
      font-weight: bold;
      font-size: 18px;
      color: #545454;
    }
    .forca {
      color: ${props => props.color};
      margin-left: 3px;
    }
  }
  .bottom {
    flex: 1;
  }
`