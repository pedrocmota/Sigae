import styled, {css} from 'styled-components'

interface IContainer {
  selecionado: boolean,
  marginTop?: number
}

export const Container = styled.div<IContainer>`
  display: inline-flex;
  height: 30px;
  color: #536a8d;
  svg {
    width: 30px;
    height: 30px;
  }
  ${({marginTop}) => marginTop && css`
    margin-top: ${marginTop}px;
 `}
 
`
export const Texto = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  font-weight: 600;
  font-size: 17px;
`