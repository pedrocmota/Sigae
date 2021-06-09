import styled from 'styled-components'
import Button from '../../componentes/Button/Button'

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