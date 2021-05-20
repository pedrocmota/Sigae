import styled, {css} from 'styled-components'
import {IFooter} from './Footer'

export const Container = styled.div<IFooter>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  min-height: 150px;
  background-color: #4a5058;
  ${({resizable}) => resizable && css`
    @media (min-width: 944px) {
      padding-left: 300px;
    }
    @media (max-height: 820px) {
      height: 120px !important;
      min-height: 120px !important;
    }
  `}
`

export const Sigae = styled.div`
  display: inline-flex;
  font-size: 20px;
  text-align: center;
  color: #a9bff1;
  .footer_right {
    margin-left: 5px;
  }
  @media (max-width: 600px) {
    display: inline-block;
  }
`

export const Copyright = styled.div`
  font-size: 17px;
  color: aliceblue;
  margin-top: 30px;
  a {
    margin-left: 5px;
    transition: color 300ms;
    text-decoration: none;
    color: #44dd68;
    &:hover {
      color: #28a745;
      text-decoration: underline;
    }
  }
  .ifba_small {
    display: none;
  }
  @media (max-width: 544px) {
    .ifba_small {
      display: inline;
    }
    .ifba_big {
      display: none;
    }
  }
  @media (max-height: 820px) {
    margin-top: 15px !important;
  }
`