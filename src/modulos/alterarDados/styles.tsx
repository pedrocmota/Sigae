import styled from 'styled-components'
import Button from '../../componentes/Button/Button'
import BasicSelect from '../../componentes/Select/Select'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  display: inline-flex;
  width: 100%;
  height: 36px;
`

export const Container = styled.div`
  flex: 1;
  margin-top: 8px;
  background-color: #f9f9f9;
  border-radius: 3px;
  padding: 20px;
`

export const TopButton = styled(Button)`
  display: flex;
  justify-content: flex-start !important;
  label {
    cursor: pointer;
    display: flex;
    padding-top: 2px;
    margin-left: 5px;
  }
`

export const Select = styled(BasicSelect)`
  input {
    border: 1px solid #ececec;
  }
`

export const EmailContainer = styled.div`
  display: inline-flex;
  margin-top: 10px;
  .email-link {
    margin-left: 5px;
    margin-right: 5px;
    color: #039be5;
  }
`