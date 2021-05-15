import styled, {css} from 'styled-components'

interface IContainer {
  selecionado: boolean
}

export const Container = styled.div<IContainer>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
  margin-top: 1px;
  margin-bottom: 1px;
  &:hover {
    background-color: #43435a;
    > * {
      color: #7f94c5;
    }
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 1px #5c67bc;
    /* outline: 2px solid black !important; */
  }
  svg {
    font-size: 24px;
    color: #ffffff;
  }
  p {
    font-size: 18px;
    color: #ffffff;
    padding-left: 10px;
  }
  ${({selecionado}) => selecionado && css`
    > * {
      color: #8dd45d !important;
    }
  `}
`