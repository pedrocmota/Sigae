import styled, {css} from 'styled-components'
import FormStyled from '../../../componentes/Form/Form'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 560px) {
    width: 95%;
  }
`

export const Text = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: justify;
  text-align-last: justify;
  @media (max-width: 462px) {
    text-align: left;
    text-align-last: auto;
  }
`

export const Lista = styled.div`
  width: 100%;
  font-size: 18px;
  margin-top: 15px;
  .row {
    display: inline-flex;
    width: 100%;
    .col1 {
      margin-right: 5px;
      min-width: 160px;
    }
    b {
      display: flex;
      font-size: 17px;
      flex-grow: 1;
      overflow-x: auto;
      scrollbar-width: none;
    }
    b::-webkit-scrollbar{
      display: none;
    }
  }
`

export const Form = styled(FormStyled)`
  margin-top: 45px;
  width: 400px;
  @media (max-width: 462px) {
    width: 98%;
  }
`

export const BottomRow = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

interface ILinks {
  disabled?: boolean
}

export const Links = styled.a<ILinks>`
  color: #5b7192;
  font-size: 16px;
  text-decoration: none;
  ${({disabled}) => disabled && css`
    color: #b6b7b9;
    text-decoration: none !important;
    cursor: not-allowed;
  `}
  &:hover {
    text-decoration: underline;
  }
`