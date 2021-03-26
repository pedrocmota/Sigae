import styled from 'styled-components'

const Generic = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  min-width: 120px;
  font-size: 15px;
  outline: 0;
  border: none;
  border-radius: 2px;
  line-height: 36px;
  margin-top: 15px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
  transition: background-color 200ms;
`

export const PopupButtonOK = styled(Generic)`
  background-color: #249b9b;
  color: white;
  &:hover {
    background-color: #31acac;
  }
`

export const PopupButtonFechar = styled(Generic)`
  background-color: #f44336;
  color: white;
  &:hover {
    background-color: #f55347;
  }
`