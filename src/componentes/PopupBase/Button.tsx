import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: inline-flex;
`

export const Ok = styled.button`
  display: inline-block;
  border: 0;
  border-radius: .25em;
  background: initial;
  background-color: #2778c4;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  min-width: 100px !important;
  margin: .3125em;
  height: 38px;
  box-shadow: none;
  font-weight: 500;
  &:hover {
    background-image: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1));
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgb(100 150 200 / 50%);
  }
`

export const Fechar = styled.button`
  display: inline-block;
  border: 0;
  border-radius: .25em;
  background: initial;
  background-color: #d14529;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  min-width: 100px !important;
  margin: .3125em;
  height: 38px;
  box-shadow: none;
  font-weight: 500;
  &:hover {
    background-image: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1));
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgb(100 150 200 / 50%);
  }
`