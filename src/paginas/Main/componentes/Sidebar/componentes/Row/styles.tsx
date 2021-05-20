import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'

export const LinkContainer = styled(NavLink)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  min-height: 48px;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
  margin-top: 1px;
  margin-bottom: 1px;
  white-space: nowrap;
  text-decoration: none;
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
  &.ativo {
    > * {
      color: #8dd45d !important;
    }
  }
`

export const DivContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  min-height: 48px;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
  margin-top: 1px;
  margin-bottom: 1px;
  white-space: nowrap;
  &:hover {
    background-color: #43435a;
    > * {
      color: #7f94c5;
    }
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 1px 1px #5c67bc;
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
`