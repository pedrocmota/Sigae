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
  &:hover {
    background-color: #43435a;
    > * {
      color: #7f94c5;
    }
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